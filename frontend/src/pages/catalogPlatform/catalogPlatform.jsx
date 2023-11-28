import React from "react";
import {
  Container,
  BackButton,
  Main,
  RegisterSection,
  WallpaperSection,
} from "./catalogPlatform";
import Footer from "../../components/footer/footer";

const CatalogPlatform = () => {
  const catalog = () => {
    let platform = document.getElementById("platform").value;
    let gender = document.getElementById("gender").value;
    let category = document.getElementById("category").value;
    let game = document.getElementById("game").value;

    if (
      platform.trim() !== "" &&
      gender.trim() !== "" &&
      category.trim() !== "" &&
      game.trim() !== ""
    ) {
      alert("Jogo catalogado");
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else {
      alert("Preencha todos os campos");
    }
  };

  //   PRAQ SERVE ISSO AQUI?

  const handleStarClick = (e) => {
    var classStar = e.target.classList;
    if (!classStar.contains("ativo")) {
      document.querySelectorAll(".star-icon").forEach(function (star) {
        star.classList.remove("ativo");
      });
      classStar.add("ativo");
      console.log(e.target.getAttribute("data-avaliacao"));
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <BackButton
        src="../assets/image/logoff.png"
        alt=""
        className="btn-back"
        onClick={goBack}
      />
      <Main>
        <RegisterSection>
          <div className="wrapper">
            <div className="container-user">
              <img
                src="../assets/image/profile.png"
                alt="Profile Logo"
                className="logo"
              />
              <p>Name</p>
            </div>
            <h1>Catalogar Plataforma</h1>
            <label className="box-text">
              <input
                type="text"
                name="platform"
                className="input"
                placeholder="Nome da Plataforma"
                id="platform"
              />
            </label>
            <button className="button" onClick={catalog}>
              Catalogar
            </button>
          </div>
        </RegisterSection>
        <WallpaperSection>
          <img src="../assets/image/carroCadastro.png" alt="Wallpaper" />
        </WallpaperSection>
      </Main>
      <Footer />
    </Container>
  );
};

export default CatalogPlatform;
