import React from "react";
import { Container, ContainerText } from "./style";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { IoMdSearch } from "react-icons/io";
import Header from "../../components/navbar/index"
import Footer from "../../components/footer/index"
import FeaturedGames from "../../components/featuredGames/featuredGames";
import BestReviews from "../../components/bestReviews/bestReviews";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Container>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Pesquisar"
            />
            <Button variant="outline-light">
              <IoMdSearch />
            </Button>
          </Form> */}
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

        <BestReviews />
      </section>
      <Footer />
    </>
  );
}
