import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  MainContainer,
  RegisterSection,
  Wrapper,
  InputBox,
  Input,
  Button,
  Buttons,
  WallpaperContainer,
  Form,
} from "./style";
import Logo from "../../assets/image/logoQuery.svg";
import Banner from "../../assets/image/valorant.png";
import Footer from "../../components/footer/index";
import api from "../../api/config";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.dateOfBirth ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Campos obrigatórios",
        text: "Por favor, preencha corretamente todos os campos.",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Senhas não coincidem",
        text: "Por favor, verifique a confirmação da senha.",
      });
      return;
    }

    if (formData.password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Senha muito curta",
        text: "A senha deve ter no mínimo 8 caracteres.",
      });
      return;
    }

    const minDate = new Date("1900-01-01");
    const maxDate = new Date("2018-01-01");
    const selectedDate = new Date(formData.dateOfBirth);

    if (selectedDate < minDate || selectedDate > maxDate) {
      Swal.fire({
        icon: "error",
        title: "Data de nascimento inválida",
        text: "Por favor, verifique a data de nascimento.",
      });
      return;
    }

    try {
      const response = await api.post("users", formData);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Cadastro Realizado com Sucesso",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Erro ao criar usuário",
        text: "Por favor, verifique os dados e tente novamente.",
      });
    }
  };

  return (
    <>
      <MainContainer>
        <RegisterSection>
          <Wrapper>
            <img src={Logo} alt="Logo" />
            <h1>CADASTRE-SE</h1>
            <Form onSubmit={handleSubmit}>
              <InputBox>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                />
              </InputBox>
              <InputBox>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputBox>
              <InputBox>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </InputBox>
              <Buttons>
                <Link to={"/login"}>
                  <Button>Voltar</Button>
                </Link>
                <Button type="submit">Cadastrar</Button>
              </Buttons>
            </Form>
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
