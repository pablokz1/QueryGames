import React from "react";
import {
  GlobalStyles,
  MainContainer,
  HeaderContainer,
  LoginContainer,
  LoginWrapper,
  ForgotPasswordLink,
  Button,
  SignUpLink,
  InputBox,
  PasswordIcon,
  Input,
  WallpaperContainer,
  MediaQueryStyles,
} from "./login"; 

const Login = () => {
  const login = () => {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    var user = {
      email: "admin",
      password: "123456",
    };

    if (emailInput !== user.email || passwordInput !== user.password) {
      alert("Usuário ou senha incorreta!");
    } else {
      window.location.href = "../index.html";
    }
  };

  const showPassword = () => {
    var inputPass = document.getElementById("password");
    var btnShowPass = document.getElementById("btn-password");

    if (inputPass.type === "password") {
      inputPass.setAttribute("type", "text");
      btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
      inputPass.setAttribute("type", "password");
      btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <img
          src="../assets/image/logoff.png"
          alt=""
          className="btn-back"
          onClick={goBack}
        />
      </HeaderContainer>

      <MainContainer>
        <LoginContainer>
          <LoginWrapper>
            <img
              src="../assets/image/logoQuery.svg"
              alt="QueryGames Logo"
              className="logo"
            />
            <h1>ENTRAR</h1>

            <InputBox>
              <Input type="text" name="email" placeholder="email" id="email" />
            </InputBox>

            <InputBox>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                id="password"
              />
              <PasswordIcon
                className="bi bi-eye-fill"
                id="btn-password"
                onClick={showPassword}
              />
            </InputBox>

            <ForgotPasswordLink href="#">Esqueceu a senha?</ForgotPasswordLink>

            <Button onClick={login}>Entrar</Button>

            <SignUpLink href="../pages/cadastro.html">Cadastre-se</SignUpLink>
          </LoginWrapper>
        </LoginContainer>

        <WallpaperContainer>
          <img src="../assets/image/valorant.png" alt="" />
        </WallpaperContainer>
      </MainContainer>

      <MediaQueryStyles />
    </>
  );
};

export default Login;
