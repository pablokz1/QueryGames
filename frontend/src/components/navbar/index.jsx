import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button, NavbarLayout  } from "./styles";
import logo from "../../assets/image/logoQuery.png";

const Header = () => {
  return (
      <NavbarLayout >
        <Logo src={logo} alt="logo querygames" />
        <Link to="/login">
          <Button>Entrar</Button>
        </Link>
      </NavbarLayout >
  );
};

export default Header;
