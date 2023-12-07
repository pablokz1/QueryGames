import styled from "styled-components";

export const NavbarLayout = styled.div`
  display: flex;
  background-color: #0d0d0d;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100%;

  p{
    color: #f1bf5e;
  }
`;

export const Logo = styled.img`
  width: 13.75em;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
     width: 150px;
  }
`;

export const Button = styled.button`
  background: #d9d0c7;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  margin-right: 20px;

  &:hover {
    background-color: #f1bf5e;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 12px;
  }
`;

export const ContainerList = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  li {
    color: white;
    font-size: 10px;

    a {
      color: white;
      text-decoration: none;
      font-weight: 400px;
      font-size: 15px;
      text-align: center;

      &:visited {
        color: white;
      }

      &:hover {
        text-decoration: underline;
        text-decoration-color: #f2bf5e;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;