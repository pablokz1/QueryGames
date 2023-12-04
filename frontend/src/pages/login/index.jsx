import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Footer from "../../components/footer/index";
import api from "../../api/config";

const Login = () => {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async () => {
    try {
      if (!formLogin.email || !formLogin.password) {
        return;
      }

      const response = await api.post("authentication", formLogin);
      localStorage.setItem("token", response.data.token);

      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  function handleChangeInput(e) {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  }

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <MainContainer>
        <LoginContainer>
          <LoginWrapper>
            <img src={Logo} alt="QueryGames Logo" className="logo" />
            <h1>ENTRAR</h1>

            <InputBox>
              <Input
                type="text"
                name="email"
                placeholder="email"
                id="email"
                value={formLogin.email}
                onChange={handleChangeInput}
              />
            </InputBox>

            <InputBox>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                id="password"
                value={formLogin.password}
                onChange={handleChangeInput}
              />
              <PasswordIcon
                className="bi bi-eye-fill"
                id="btn-password"
                onClick={showPassword}
              />
            </InputBox>

            <ForgotPasswordLink href="#">Esqueceu a senha?</ForgotPasswordLink>

            <Button onClick={login}>Entrar</Button>
            <Link to="/register">
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
