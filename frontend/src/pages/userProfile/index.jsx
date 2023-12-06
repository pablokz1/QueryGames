import React, { useEffect, useState } from "react";
import { ContainerUser, Section, Button, CustomTable } from "./style";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import { jwtDecode } from "jwt-decode";
import Modal from "./Modal";
import api from "../../api/config";

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
          <Button onClick={handleEditButtonClick}>Editar Perfil</Button>
          <ContainerUser>
            <div>
              <p>Ola, {userData.name}</p> <br />
              <p>{userData.email}</p>
            </div>
          </ContainerUser>
          {isModalOpen && (
            <Modal onClose={handleModalClose}>
              <Button onClick={handleModalClose}>Fechar Modal</Button>
            </Modal>
          )}
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
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {userGames.map((game) => (
                  <tr key={game.id}>
                    <td>{game.game}</td>
                    <td>{game.platform}</td>
                    <td>{game.category}</td>
                    <td>....</td>
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
