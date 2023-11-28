import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  ::-webkit-scrollbar {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: 
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: 
  }
  body {
    background-color: 
    scrollbar-width: thin;
    scrollbar-color: 
  }
  body::-webkit-scrollbar-thumb {
    background-color: 
  }
  body::-webkit-scrollbar-track {
    background-color: 
  }
`;

export const Navigation = styled.nav`
  position: relative;
  height: 37rem;
  &::before {
    content: "";
    background-image: url(../assets/image/f23-authenticity-labombonera-16x9.jpg.adapt.crop16x9.1455w.webp);
    background-size: cover;
    height: 37rem;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Logo = styled.div`
  img {
    width: 13.125em;
    height: 4.1875em;
    position: absolute;
    top: 8.125em;
    left: 4rem;
  }
`;

export const SearchBox = styled.div`
  position: absolute;
  left: 40%;
  top: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: 
  width: 292px;
  height: 41px;
  padding: 10px;
  border-radius: 25px;
  img {
    height: 20px;
    width: 20px;
  }
  img:hover {
    cursor: pointer;
  }
  input {
    border: none;
    background: none;
    outline: none;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 22px;
    color: black;
    &::placeholder {
      color: black;
    }
  }
`;

export const LoginBtn = styled.a`
  position: absolute;
  top: 8.5rem;
  background: 
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  left: 80%;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  &:hover {
    background-color: 
    cursor: pointer;
  }
`;

export const NavText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  position: absolute;
  left: 40.3%;
  top: 13rem;
  color: 
  span {
    color: 
    font-weight: bold;
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
  }
`;

export const Sidebar = styled.div`
  position: absolute;
  left: -250px;
  width: 250px;
  height: 590px;
  background-color: rgba(13, 13, 13, 0.95);
  color: white;
  transition: all 300ms ease-in-out;
  border-radius: 10px;
`;
