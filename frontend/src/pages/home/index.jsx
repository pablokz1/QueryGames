import React from "react";
import { Container, ContainerText } from "./style";
import Header from "../../components/navbar/index"
import Footer from "../../components/footer/index"
import FeaturedGames from "../../components/featuredGames/featuredGames";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <ContainerText>
            <p>
              <b>Explore</b> o universo dos
            </p>
            <p>
              <b>Jogos</b> como nunca antes
            </p>
          </ContainerText>
        </Container>
        <FeaturedGames />
      </section>
      <Footer />
    </>
  );
}
