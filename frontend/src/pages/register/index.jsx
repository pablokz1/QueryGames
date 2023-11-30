import React, { useState } from "react";
import {
  MainContainer,
  RegisterSection,
  Wrapper,
  InputBox,
  Input,
  Button,
  WallpaperContainer,
} from "./style";
import Logo from "../../assets/image/logoQuery.svg";
import Banner from "../../assets/image/valorant.png";
import Footer from "../../components/footer/footer";
import { api } from "../../api/config";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
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

    try {
      const response = await api.post('users', { formData })
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MainContainer>
        <RegisterSection>
          <Wrapper>
            <img src={Logo} alt="Logo" />
            <h1>CADASTRE-SE</h1>
            <form onSubmit={handleSubmit}>
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
              {/* <InputBox>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </InputBox> */}
            </form>
              <Button onClick={handleSubmit}>Cadastrar</Button>
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
