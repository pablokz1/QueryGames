import React from "react";
import {
  GlobalStyle,
  Navigation,
  Logo,
  SearchBox,
  LoginBtn,
  NavText,
  Sidebar,
} from "./style";

const Home = () => {
  return (
    <>
      <GlobalStyle />

      <Navigation>
        <Logo>
          <img src="./assets/image/logoQuery.png" alt="logo querygames" />
        </Logo>

        <SearchBox>
          <input type="text" placeholder="buscar" />
          <img src="./assets/image/lupa.svg" alt="lupa" />
        </SearchBox>

        <LoginBtn href="./pages/login.html">Entrar</LoginBtn>

        <NavText>
          <p>
            <span>Explore</span> o universo dos
            <br />
            <span>Jogos</span> como nunca antes
          </p>
        </NavText>

        <Sidebar className="active">
          <div className="profile-user">
            <img
              src="./assets/image/profile.png"
              alt=""
              className="image-user"
            />
            <a href="./pages/myProfile.html">
              <button className="my-profile-btn">Minha Página</button>
            </a>
          </div>

          <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul>
            <div className="menu">
              <h1>Generos</h1>
              {/* ... (Remaining sidebar content) */}
            </div>
          </ul>
        </Sidebar>
      </Navigation>

      <section>
        <h1>EM DESTAQUE</h1>
        <div className="catalog1">
          <div className="games1">
            {/* ... (Remaining content for catalog1) */}
          </div>
        </div>
      </section>

      <section>
        <h1>MELHORES AVALIAÇÕES</h1>
        <div className="catalog2">
          <div className="games2">
            {/* ... (Remaining content for catalog2) */}
          </div>
        </div>
      </section>

      <footer>
        <div className="container-logo-footer">
          <img
            src="./assets/image/logoQuery.png"
            alt="logo querygames"
            className="logo-footer"
          />
        </div>
        <div className="container-announcement-footer">
          <img
            src="./assets/image/baixe nosso app.png"
            alt="baixe Nosso App"
            className="announcement-img"
          />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Quem Somos?</a>
            </li>
            <li>
              <p>
                Fale Conosco: <br />
                querygames@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
