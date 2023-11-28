import React from "react";
import { GlobalStyle, ContainerUser, Section } from "./userProfile"; 

function UserProfile() {
  const notice = () => {
    alert(
      "Desculpe, mas esta funcionalidade ainda não está disponível. Estamos trabalhando nisso e ela será implementada em uma próxima atualização. Agradecemos pela sua compreensão e paciência!"
    );
  };
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <GlobalStyle />
      <div>
        <nav className="conteiner-user">
          <ContainerUser>
            <div className="profile-user">
              <img
                src="../assets/image/profile.png"
                alt=""
                className="image-user"
              />
              <div className="data-user">
                <p1>Ola, name</p1> <br />
                <p2>user@gmail.com</p2>
              </div>
            </div>

            <a href="./catalogGames.html">
              <button className="btn-catalog-game">Catalogar jogo</button>
            </a>

            <a href="./catalogPlatform.html">
              <button className="btn-catalog-game">Catalogar plataforma</button>
            </a>

            <div className="btns">
              <div className="config">
                <img
                  src="../assets/image/config.png"
                  alt=""
                  className="btn-config"
                  onClick={notice()}
                />
              </div>

              <div className="logoff">
                <img
                  src="../assets/image/logoff.png"
                  alt=""
                  className="btn-back"
                  onClick={goBack}
                />
              </div>
            </div>
          </ContainerUser>
        </nav>

        <Section>
          <div className="my-list">
            <h1>MINHA LISTA</h1>
            <div className="games">
              <div>
                <img
                  src="../assets/image/8lQ1y71vNA55ndiuSgWUSz6nqz3g0xR0.webp"
                  alt=""
                />
              </div>
              {/*... Add other game items ...*/}
            </div>
          </div>
        </Section>

        <Section>
          <div className="my-list">
            <label className="box-text">
              <select id="category" name="category" className="input">
                <option value="">Categoria</option>
                <option value="played">Jogando</option>
                <option value="playing">Jogado</option>
                {/*... Add other options ...*/}
              </select>
            </label>
            <div className="games">
              <div>
                <img
                  src="../assets/image/lE7RoDAH8Utq30mBwvYkrD7Y.webp"
                  alt=""
                />
              </div>
              {/*... Add other game items ...*/}
            </div>
          </div>
        </Section>
      </div>

      <script src="../js/myProfile.js"></script>
      <script src="../js/goBack.js"></script>

      <footer>
        <div className="container-logo-footer">
          <img
            src="../assets/image/logoQuery.png"
            alt="logo querygames"
            className="logo-footer"
          />
        </div>
        <div className="container-announcement-footer">
          <img
            src="../assets/image/baixe nosso app.png"
            alt="baixe Nosso App"
            className="announcement-img"
          />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="../index.html">Início</a>
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
}

export default UserProfile;
