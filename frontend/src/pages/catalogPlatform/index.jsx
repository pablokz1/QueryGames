import React, { useState } from "react";
import api from "../../api/config";
import Swal from "sweetalert2";
import {
  MainContainer,
  CalatalogContainer,
  CatalogWrapper,
  Button,
  InputBox,
  Input,
  WallpaperContainer,
} from "./style";
import Banner from "../../assets/image/carroCadastro.png";
import Header from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const CatalogPlatform = () => {
  const [formPlatform, setFormGames] = useState({
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formPlatform.name) {
      Swal.fire({
        icon: "error",
        title: "Campos obrigatórios",
        text: "Por favor, preencha corretamente todos os campos.",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await api.post("platforms", formPlatform, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      Swal.fire({
        icon: "success",
        title: "Plataforma cadastrada com Sucesso",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Catalog failed:", error);

      Swal.fire({
        icon: "error",
        title: "Erro ao catalogar jogo",
        text: `Tente novamenre ${error}`,
      });
    }
  };

  function handleChangeInput(e) {
    setFormGames({
      ...formPlatform,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Header />
      <MainContainer>
        <CalatalogContainer>
          <CatalogWrapper>
            <h1><i class="bi bi-joystick"></i> Cadastrar Plataforma</h1>
            <InputBox>
              <Input
                type="text"
                name="name"
                placeholder="Nome da Plataforma"
                id="game"
                value={formPlatform.name}
                onChange={handleChangeInput}
              />
            </InputBox>

            <Button onClick={handleSubmit}>Cadastrar</Button>
          </CatalogWrapper>
        </CalatalogContainer>
        <WallpaperContainer>
          <img src={Banner} alt="Banner" />
        </WallpaperContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default CatalogPlatform;
