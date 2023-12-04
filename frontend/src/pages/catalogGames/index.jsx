import React, { useState, useEffect } from "react";
import api from "../../api/config";
import Swal from "sweetalert2";
import {
  MainContainer,
  CalatalogContainer,
  CatalogWrapper,
  Button,
  InputBox,
  Input,
  SelectInput,
  WallpaperContainer,
} from "./style";
import Banner from "../../assets/image/carroCadastro.png";
import Header from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const CatalogGames = () => {
  const [formGames, setFormGames] = useState({
    name: "",
    platformId: null,
    categories: [],
  });
  const [platforms, setPlatforms] = useState([]);
  const [categories, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formGames.name || !formGames.platformId || !formGames.categories) {
      Swal.fire({
        icon: "error",
        title: "Campos obrigatórios",
        text: "Por favor, preencha corretamente todos os campos.",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await api.post("games", formGames, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      Swal.fire({
        icon: "success",
        title: "Jogo catalogado com Sucesso",
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
    const { name, options } = e.target;
  
    if (name === "categories") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => ({
          id: option.value,
        }));
  
      setFormGames((prevFormGames) => ({
        ...prevFormGames,
        [name]: selectedOptions,
      }));
    } else {
      setFormGames((prevFormGames) => ({
        ...prevFormGames,
        [name]: e.target.value,
      }));
    }
  }

  const fetchPlatform = async () => {
    try {
      const response = await api.get("platforms");
      const data = response.data;
      setPlatforms(data);
    } catch (error) {
      console.error("Erro ao obter opções da plataforma:", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await api.get("categories");
      const data = response.data;
      setCategory(data);
    } catch (error) {
      console.error("Erro ao obter opções das Categorias:", error);
    }
  };

  useEffect(() => {
    fetchPlatform();
    fetchCategory();
    console.log("formGames", formGames);
  }, [formGames]);

  return (
    <>
      <Header />
      <MainContainer>
        <CalatalogContainer>
          <CatalogWrapper>
            <h1>Catalogar Jogos</h1>
              <InputBox>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome do Jogo"
                  id="game"
                  value={formGames.name}
                  onChange={handleChangeInput}
                />
              </InputBox>
              <InputBox>
                <SelectInput
                  id="platform"
                  name="platformId"
                  onChange={handleChangeInput}
                  value={formGames.platformId}
                >
                  <option value="">Plataforma</option>
                  {platforms.map((platform) => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
                </SelectInput>
              </InputBox>
              <InputBox>
                <SelectInput
                  id="categories"
                  name="categories"
                  onChange={handleChangeInput}
                  value={formGames.categories.map((category) => category.id)}
                >
                  <option value="">Categoria</option>
                  {categories.map((categoryItem) => (
                    <option key={categoryItem.id} value={categoryItem.id}>
                      {categoryItem.name}
                    </option>
                  ))}
                </SelectInput>
              </InputBox>
              <Button onClick={handleSubmit}>Catalogar</Button>
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

export default CatalogGames;
