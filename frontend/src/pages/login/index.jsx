import React from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  LoginContainer,
  LoginWrapper,
  ForgotPasswordLink,
  Button,
  SignUpLink,
  InputBox,
  PasswordIcon,
  Input,
  WallpaperContainer,
} from "./style";
import Banner from "../../assets/image/valorant.png";
import Logo from "../../assets/image/logoQuery.svg";
import Footer from "../../components/footer/footer";

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

  return (
    <>
      <MainContainer>
        <LoginContainer>
          <LoginWrapper>
            <img src={Logo} alt="QueryGames Logo" className="logo" />
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
            <Link to="/cadastro">
              <SignUpLink>Cadastre-se</SignUpLink>
            </Link>
          </LoginWrapper>
        </LoginContainer>

        <WallpaperContainer>
          <img src={Banner} alt="" />
        </WallpaperContainer>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Login;
