import React from "react";
import Image from "../../assets/image/logoQuery.png";
import playStory from "../../assets/image/baixe nosso app.png";
import { FooterLayout, Logo, PlayStoreImage, ContainerList } from "./styles";
const Footer = () => {
  return (
    <FooterLayout>
      <Logo src={Image} alt="logo querygames" />
      <PlayStoreImage src={playStory} alt="baixe Nosso App" />
      <ContainerList>
        <li>
          <a href="../index.html">Início</a>
        </li>
        <li>
          <a href="/">Quem Somos?</a>
        </li>
        <li>querygames@gmail.com</li>
      </ContainerList>
    </FooterLayout>
  );
};

export default Footer;
