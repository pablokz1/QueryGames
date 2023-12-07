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
    Platforms
  } from './style';

const FeaturedGames = () => {
  return (
    <FeaturedSectionContainer>
      <h1>JOGOS EM DESTAQUE</h1>
      <CatalogContainer className="catalog1">
        <GamesContainer className="games1">
          <GameItem>
            <GameImage src={Fifa}/>
            <h2>FC 24</h2>
            <p>Esportes</p>
            <Platforms className="platforms">EA PLAY</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={Batman} alt="" />
            <h2>BATMAN ARKHAM NIGHT</h2>
            <p>Ação</p>
            <Platforms className="platforms">PSN</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={GTA} alt="" />
            <h2>GRAND THEFT AUTO V</h2>
            <p>Ação</p>
            <Platforms className="platforms">GAME PASS</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={TheForest} alt="" />
            <h2>THE FOREST</h2>
            <p>Ação</p>
            <Platforms className="platforms">STEAM</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={RE} alt="" />
            <h2>RESIDENT EVIL</h2>
            <p>Ação</p>
            <Platforms className="platforms">STEAM</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={Valorant} alt="" />
            <h2>VALORANT</h2>
            <p>Ação</p>
            <Platforms className="platforms">STEAM</Platforms>
          </GameItem>
          <GameItem>
            <GameImage src={TheSims} alt="" />
            <h2>THE SIMS</h2>
            <p>Simulador</p>
            <Platforms className="platforms">EA PLAY</Platforms>
          </GameItem>
        </GamesContainer>
      </CatalogContainer>
    </FeaturedSectionContainer>
  );
};

export default FeaturedGames;
