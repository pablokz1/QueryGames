import React, { useEffect, useState } from "react";
import { ContainerUser, Section, Button, CustomTable, CustonTd } from "./style";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import { jwtDecode } from "jwt-decode";
import Modal from "./Modal";
import api from "../../api/config";
import Swal from "sweetalert2";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [userGames, setUserGames] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  function handleEditGame(gameId) {}

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

  useEffect(() => {
    getUserLocalStorage();
  }, []);

  useEffect(() => {
    if (userData.userId) {
      getUserGames(userData.userId);
    }
  }, [userData]);

  return (
    <>
      <Header />
      <div>
        <nav>
          <ContainerUser>
            <div>
              <p>Olá, {userData.name}</p> <br />
              <p>{userData.email}</p>
            </div>
          </ContainerUser>
        </nav>

        <Section>
          <div>
            <h1>Meus Jogos</h1>
            <CustomTable striped bordered hover variant="dark">
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
                    <td>teste</td>
                    <CustonTd>
                      <Button onClick={() => handleEditGame(game.id)}>
                        Editar
                      </Button>
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
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
