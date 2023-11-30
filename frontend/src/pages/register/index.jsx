import React from "react";
import {
  MainContainer,
  RegisterSection,
  Wrapper,
  Input,
  InputBox,
  WallpaperContainer,
  Button,
} from "./style";
import Footer from "../../components/footer/footer";
import Logo from "../../assets/image/logoQuery.svg";
import Banner from "../../assets/image/valorant.png";

const Register = () => {
  return (
    <>
      <MainContainer>
        <RegisterSection>
          <Wrapper>
            <img src={Logo} alt="Logo" />
            <h1>CADASTRE-SE</h1>
            <InputBox>
              <Input type="text" name="username" placeholder="Nome completo" />
            </InputBox>
            <InputBox>
              <Input type="text" name="nickname" placeholder="Apelido" />
            </InputBox>
            <InputBox>
              <Input type="date" name="data" />
            </InputBox>
            <InputBox>
              <Input type="text" name="email" placeholder="Email" />
            </InputBox>
            <InputBox>
              <Input type="password" name="password" placeholder="Senha" />
            </InputBox>
            <InputBox>
              <Input
                type="password"
                name="password"
                placeholder="Confirmar senha"
              />
            </InputBox>

            <Button>Cadastrar</Button>
          </Wrapper>
        </RegisterSection>
        <WallpaperContainer>
          <img src={Banner} alt="" />
        </WallpaperContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Register;
