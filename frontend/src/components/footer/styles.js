import styled from "styled-components";

export const FooterLayout = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  @media (max-width: 768px) {
  }
`;

export const Logo = styled.img`
  width: 10rem;
  height: 5rem;
  @media (max-width: 768px) {
    width: 6rem;
    height: 3rem;
  }
`;
export const PlayStoreImage = styled.img`
  width: 15rem;
  height: 6rem;
  @media (max-width: 768px) {
    width: 8rem;
    height: 3rem;
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
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
