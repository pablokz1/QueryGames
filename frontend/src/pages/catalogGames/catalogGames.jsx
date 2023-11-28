import React from "react";
import {
  RegisterSection,
  ContainerUser,
  Wrapper,
  Input,
  BoxText,
  WallpaperSection,
  Button,
  Logo,
} from "./catalogGames";
import Footer from "../../components/footer/footer";

const CatalogGames = () => {
  const catalog = () => {
    // your catalog function logic here
  };

  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulario de catálogo de jogos</title>
      </head>
      <body>
        <img
          src="../assets/image/logoff.png"
          alt=""
          className="btn-back"
          onClick={() => window.history.back()}
        />
        <main>
          <RegisterSection className="register">
            <Wrapper>
              <ContainerUser>
                <Logo src="../assets/image/profile.png" alt="Profile Logo" />
                <p>Name</p>
              </ContainerUser>
              <h1>Catalogar Jogos</h1>
              <BoxText>
                <Input
                  type="text"
                  name="game"
                  className="input"
                  placeholder="Nome do Jogo"
                  id="game"
                />
              </BoxText>
              {/* ... Other Input Components ... */}
              <p>Avalie</p>
              <ul className="avaliacao">{/* ... Star Icons ... */}</ul>
              <Button onClick={catalog}>Catalogar</Button>
            </Wrapper>
          </RegisterSection>
          <WallpaperSection className="wallpaper">
            <img src="../assets/image/carroCadastro.png" alt="" />
          </WallpaperSection>
        </main>
        {/* ... Script Tags ... */}
        <Footer />
      </body>
    </html>
  );
};

export default CatalogGames;
