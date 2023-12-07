import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image/logoQuery.png";
import playStory from "../../assets/image/baixe nosso app.png";
import { FooterLayout, Logo, PlayStoreImage, ContainerList } from "./styles";

const Footer = () => {
  return (
    <FooterLayout>
      <Link to="/home">
        <Logo src={Image} alt="logo querygames" />
      </Link>
      <PlayStoreImage src={playStory} alt="baixe Nosso App" />
      <ContainerList>
        <li>
          <Link to='/home'>Início</Link>
        </li>
        <li>
          <p>Flae conosco <br/>
          querygames@gmail.com</p></li>
      </ContainerList>
    </FooterLayout>
  );
};

export default Footer;
