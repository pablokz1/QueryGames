import React from "react";
import { GlobalStyle, ContainerUser, Section } from "./style";
import Logoff from "../../assets/image/logoff.png";

function UserProfile() {
  return (
    <>
      <GlobalStyle />
      <div>
        <nav>
          <ContainerUser>
            <div>
              <img src="../assets/image/profile.png" alt="" />
              <div>
                <p1>Ola, name</p1> <br />
                <p2>user@gmail.com</p2>
              </div>
            </div>

            <button>Catalogar jogo</button>

            <button>Catalogar plataforma</button>

            <div>
              <div>
                <img src="../assets/image/config.png" alt="" />
              </div>

              <div className="logoff">
                <img src={Logoff} alt="" />
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
