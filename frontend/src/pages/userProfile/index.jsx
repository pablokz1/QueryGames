import React from "react";
import { GlobalStyle, ContainerUser, Section } from "./style";
import Header from "../../components/navbar";
import Footer from "../../components/footer";

function UserProfile() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <div>
        <nav>
          <ContainerUser>
            <div>
              <div>
                <p1>Ola, name</p1> <br />
                <p2>user@gmail.com</p2>
              </div>
            </div>
          </ContainerUser>
        </nav>

        <Section>
          <div className="my-list">
            <h1>MINHA LISTA</h1>
            <div></div>
          </div>
        </Section>

        <Section>
          <div>
            <label>
              <select id="category" name="category">
                <option value="">Categoria</option>
                <option value="played">Jogando</option>
                <option value="playing">Jogado</option>
              </select>
            </label>
            <div className="games">
              <div>
                <img
                  src="../assets/image/lE7RoDAH8Utq30mBwvYkrD7Y.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
