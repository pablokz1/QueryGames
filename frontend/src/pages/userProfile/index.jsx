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
      setUserGames(response.data);
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

  async function handleUpdateGame(gameId) {
    try {
      const gameResponse = await api.get(`games/${gameId}`);
      const gameData = gameResponse.data;
      const platformsResponse = await api.get("platforms");
      const categoriesResponse = await api.get("categories");
      const platforms = platformsResponse.data;
      const categories = categoriesResponse.data;
      
      const swalResult = await Swal.fire({
        title: "Atualizar Jogo",
        html: `
          <div style="margin-bottom: 10px;">
            <label for="swal-input1">Nome:</label>
            <input id="swal-input1" class="swal2-input" value="${gameData.name}">
          </div>
          <div style="margin-bottom: 10px;">
            <label for="swal-input2">Plataforma:</label>
            <select id="swal-input2" class="swal2-input">
              ${platforms
                .map(
                  (platform) =>
                    `<option value="${platform.id}" ${
                      platform.id === gameData.platformId ? "selected" : ""
                    }>${platform.name}</option>`
                )}
            </select>
          </div>
          <div style="margin-bottom: 10px;">
            <label for="swal-input3">Categorias:</label>
            <select id="swal-input3" class="swal2-input">
              ${categories
                .map(
                  (category) =>
                    `<option value="${category.id}" ${
                      category.id === gameData.categories[0].id ? "selected" : ""
                    }>${category.name}</option>`
                )}
            </select>
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
      });
      
      if (swalResult.isConfirmed) {
        const updatedName = document.getElementById("swal-input1").value;
        const updatedPlatformId = parseInt(document.getElementById("swal-input2").value);
        const updatedCategories = parseInt(document.getElementById("swal-input3").value);
        const payload = {
          id: gameId,
          name: updatedName,
          platformId: updatedPlatformId,
          categories: [
            {
              id: updatedCategories,
            },
          ],
        };
        const updateResponse = await api.put(
          `games/${gameId}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (updateResponse.status === 204) {
          const updatedUserGames = userGames.map((game) =>
            game.id === gameId ? { ...game, ...updateResponse.data } : game
          );
          setUserGames(updatedUserGames);
          Swal.fire({
            title: "Atualizado!",
            text: "O jogo foi atualizado com sucesso.",
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(function() {
            window.location.reload();
        }, 2000);
        } else {
          Swal.fire("", "O jogo não foi atualizado.", "error");
        }
      } else {
        Swal.fire("", "Atualização cancelada.", "info");
      }
    } catch (error) {
      console.error("Erro ao atualizar o jogo", error);
      Swal.fire("", "Ocorreu um erro ao atualizar o jogo.", "error");
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
            <i class="bi bi-list"></i> Meus Jogos
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
                      onClick={() => handleUpdateGame(game.id)}
                    >
                      <i class="bi bi-pencil"></i> <span> Editar</span>
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteGame(game.id)}
                    >
                      <i class="bi bi-trash"></i> <span> Excluir</span>
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
