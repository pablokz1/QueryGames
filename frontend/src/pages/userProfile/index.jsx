import React, { useEffect, useState } from "react";
import { ContainerUser, Section, Button, CustomTable } from "./style";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import { jwtDecode } from "jwt-decode";
import Modal from "./Modal";


function UserProfile() {
  const [userData, setUserData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getUserLocalStorage() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded) {
          const { username: name, sub: email } = decoded;
          setUserData({
            name,
            email,
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

  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUserLocalStorage();
  }, []);

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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
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
