import styled from "styled-components";

export const NavbarLayout = styled.div`
  display: flex;
  background-color: #0d0d0d;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 13.75em;
  
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
`;
