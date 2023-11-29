import React from "react";
import { Logo } from "./styles";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/image/logoQuery.png";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
const Header = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-body-black " style={{backgroundColor:"black"}} collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo src={logo} alt="logo querygames" className="logo-footer" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$sm`} className="bg-white"></Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$sm`}>
                QueryGames
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <Button variant="light" style={{ borderRadius: 10 }}>
                    Entrar
                  </Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
