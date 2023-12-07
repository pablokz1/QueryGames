import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Button, NavbarLayout, ContainerList } from "./styles";
import logo from "../../assets/image/logoQuery.png";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");

  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
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
            
            const fullName = name || "";
            const first = fullName.split(" ")[0];
            setFirstName(first);
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

    getUserLocalStorage();
  }, []);

  return (
    <NavbarLayout>
      <Link to="/home">
        <Logo src={logo} alt="logo querygames" />
      </Link>
      <ContainerList>
        <li>
          <Link to="/userProfile">Meu Perfil</Link>
        </li>
        <li>
          <Link to="/catalogGames">Catalogar Jogo</Link>
        </li>
        <li>
          <Link to="/catalogPlatform">Cadastrar Plataforma</Link>
        </li>
      </ContainerList>
      <p>
        <i className="bi bi-person-fill"></i> Olá, {firstName}
      </p>
      <Button onClick={Logout}>
        <i className="bi bi-arrow-bar-right"></i> Sair
      </Button>
    </NavbarLayout>
  );
};

export default Header;
