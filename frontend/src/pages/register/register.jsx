import React from "react";
import {
  RegisterSection,
  Wrapper,
  Input,
  BoxText,
  WallpaperSection,
  Button,
} from "./register";
import Footer from "../../components/footer/footer";

const Register = () => {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cadastro</title>
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
              <img src="../assets/image/logoQuery.svg" alt="Logo" />
              <h1>CADASTRE-SE</h1>
              <BoxText>
                <Input
                  type="text"
                  name="username"
                  placeholder="Nome completo"
                />
              </BoxText>
              <BoxText>
                <Input type="text" name="nickname" placeholder="Apelido" />
              </BoxText>
              <BoxText>
                <Input type="date" name="data" />
              </BoxText>
              <BoxText>
                <Input type="text" name="email" placeholder="Email" />
              </BoxText>
              <BoxText>
                <Input type="password" name="password" placeholder="Senha" />
              </BoxText>
              <BoxText>
                <Input
                  type="password"
                  name="password"
                  placeholder="Confirmar senha"
                />
              </BoxText>
              <a href="/">
                <Button>Cadastrar</Button>
              </a>
            </Wrapper>
          </RegisterSection>
          <WallpaperSection className="wallpaper">
            <img src="../assets/image/valorant.png" alt="" />
          </WallpaperSection>
        </main>
        <script src="../js/goBack.js"></script>
      </body>
      <Footer />
    </html>
  );
};

export default Register;
