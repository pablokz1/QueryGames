import styled from "styled-components";

export const FooterLayout = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0d0d0d;
  @media (max-width: 768px) {
  }
`;

export const Logo = styled.img`
  width: 180px;
  @media (max-width: 768px) {
    width: 6rem;
    height: 3rem;
  }
`;

export const PlayStoreImage = styled.img`
  width: 180px;
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
      font-weight: 400px;
      font-size: 15px;
      text-align: center;
    }

    a:hover {
      text-decoration: underline;
      text-decoration-color: #f2bf5e;
    }

    p {
      font-weight: 400px;
      font-size: 15px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
