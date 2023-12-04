import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button, NavbarLayout, ContainerList } from "./styles";
import logo from "../../assets/image/logoQuery.png";

const Header = () => {
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <NavbarLayout>
      <Logo src={logo} alt="logo querygames" />
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
      <Button onClick={Logout}>Sair</Button>
    </NavbarLayout>
  );
};

export default Header;
