import React, { useEffect, useState } from "react";
import { Section, Button, CustomTable, CustonTd } from "./style";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import { jwtDecode } from "jwt-decode";
import api from "../../api/config";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [userGames, setUserGames] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    getUserLocalStorage();
  }, []);

  useEffect(() => {
    if (userData.userId) {
      getUserGames(userData.userId);
    }
  }, [userData]);

  function getUserLocalStorage() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded) {
          const { username: name, sub: email, userId: userId } = decoded;
          setUserData({
            name,
            email,
            userId,
          });
        } else {
          console.error("Erro ao decodificar o token");
        }
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    } else {
      console.error("Token não encontrado no Local Storage");
    }
  }

  async function getUserGames(userId) {
    try {
      const response = await api.get(`/users/games/${userId}`);
      const gamesWithNotes = await Promise.all(
        response.data.map(async (game) => {
          const noteResponse = await api.get(`scores/games/${game.id}`);
          return { ...game, note: noteResponse.data.note };
        })
      );
      setUserGames(gamesWithNotes);
    } catch (error) {
      console.error("Erro ao obter os jogos do usuário", error);
    }
  }

  async function handleDeleteGame(gameId) {
    try {
      const result = await Swal.fire({
        title: "Tem certeza?",
        text: "Esta ação é irreversível!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sim, exclua!",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await api.delete(`games/${gameId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.status === 204) {
          const updatedUserGames = userGames.filter(
            (game) => game.id !== gameId
          );
          setUserGames(updatedUserGames);

          Swal.fire("Excluído!", "O jogo foi excluído com sucesso.", "success");
        } else {
          Swal.fire("", "O jogo não foi excluído.", "error");
        }
      } else {
        Swal.fire("", "Exclusão cancelada.", "info");
      }
    } catch (error) {
      console.error("Erro ao excluir o jogo", error);
      Swal.fire("", "Ocorreu um erro ao excluir o jogo.", "error");
    }
  }

  const handleRating = async (rate, gameId) => {
    if (rate >= 1 && rate <= 5) {
      setRating(rate);
    }

    try {
      const response = await api.get(`scores/games/${gameId}`);

      if (!response.data) {
        await api.post(
          "scores",
          {
            note: rate,
            gameId: gameId,
            userId: userData.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        await api.put(
          `scores/${response.data.id}`,
          {
            id: response.data.id,
            note: rate,
            gameId: gameId,
            userId: userData.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }
      setRating(rate);
    } catch (error) {
      console.error("Erro ao enviar pontuação para a API:", error);
    }
  };

  return (
    <>
      <Header />
      <Section>
        <div>
          <h1>
            <i className="bi bi-card-list"></i> Meus Jogos
          </h1>
          <CustomTable>
            <thead>
              <tr>
                <th>Nome do Jogo</th>
                <th>Plataforma</th>
                <th>Categoria</th>
                <th>Score</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {userGames.map((game) => (
                <tr key={game.id}>
                  <td>{game.game}</td>
                  <td>{game.platform}</td>
                  <td>{game.category}</td>
                  <td>
                    <Rating
                    size={14}
                      initialValue={game.note}
                      onClick={(rate) => handleRating(rate, game.id)}
                    />
                  </td>
                  <CustonTd>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteGame(game.id)}
                    >
                      Excluir
                    </Button>
                  </CustonTd>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default UserProfile;
