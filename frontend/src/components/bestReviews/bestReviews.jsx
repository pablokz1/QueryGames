import React from "react";
import Fifa from "../../assets/image/nova-capa-do-ea-sports-fc-24-1689275426846_v2_3x4.jpg";
import Batman from "../../assets/image/daExAVIqaWz8NNeqTaFW2IcweYzqt4d8.webp";
import GTA from "../../assets/image/Grand_Theft_Auto_V_capa.png";
import TheForest from "../../assets/image/5bfdc39c5c4fb.jpg";
import RE from "../../assets/image/85p2Dwh5iDhUzRKe40QeNYh3.webp";
import Valorant from "../../assets/image/5ec161df463ab.jpg";
import TheSims from "../../assets/image/EGS_TheSims4_ElectronicArts_S2_1200x1600-ceadc3bd1e6f885ad64d9f115f51f5c0.jpg";
import {
    FeaturedSectionContainer,
    CatalogContainer,
    GamesContainer,
    GameItem,
    GameImage,
  } from './style';

const BestReviews = () => {
  return (
    <FeaturedSectionContainer>
      <h1>MELHORES AVALIAÇÕES</h1>
      <CatalogContainer>
        <GamesContainer>
          <GameItem>
            <GameImage src={Fifa}/>
          </GameItem>
          <GameItem>
            <GameImage src={Batman} alt="" />
          </GameItem>
          <GameItem>
            <GameImage src={GTA} alt="" />
          </GameItem>
          <GameItem>
            <GameImage src={TheForest} alt="" />
          </GameItem>
          <GameItem>
            <GameImage src={RE} alt="" />
          </GameItem>
          <GameItem>
            <GameImage src={Valorant} alt="" />
          </GameItem>
          <GameItem>
            <GameImage src={TheSims} alt="" />
          </GameItem>
        </GamesContainer>
      </CatalogContainer>
    </FeaturedSectionContainer>
  );
};

export default BestReviews;
