import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,300&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
`;

export const Footer = styled.footer`
  background-color: #0d0d0d;
  color: #d9d0c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 133px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const FooterLink = styled.a`
  color: #d9d0c7;
  text-decoration: none;
  margin-right: 20px;
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #f2bf5e;
  }
`;

export const LogoAndAnnouncement = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 180px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  margin-left: 140px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinksListItem = styled.li`
  display: inline-block;
  margin-right: 130px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #d9d0c7;
  font-weight: 400;
  font-size: 18px;
`;

export const ContactInfo = styled.p`
  margin: 0;
  margin-right: 20px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
`;