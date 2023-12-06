import styled from "styled-components";
import { Table } from "react-bootstrap";

export const ContainerUser = styled.div`
  width: 96.5%;
  height: 160px;
  background-color: #595959;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin: 25px 16px;

  .profile-user {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-user {
    width: 110px;
  }

  .data-user {
    padding: 10px;

    p1 {
      font-size: 20px;
      color: #d9d0c7;
    }

    p2 {
      font-size: 12px;
      color: #fec163;
    }
  }

  .btn-catalog-game {
    background-color: #262626;
    color: #d9d0c7;
    border-radius: 4px;
    width: 146px;
    height: 36px;

    &:hover {
      background-color: #fec163;
      color: #0d0d0d;
      cursor: pointer;
    }
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .btn-config:hover {
    cursor: pointer;
  }

  .btn-back {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #0d0d0d;
  width: 100%;
  min-height: 20em;
  padding-bottom: 50px;

  h1 {
    font-family: Open Sans;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #d9d0c7;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background: #d9d0c7;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 700;
  margin: 5px;

  &:hover {
    background-color: #f1bf5e;
    cursor: pointer;
  }
`;

export const CustomTable = styled(Table)`
  color: #f1bf5e;
  width: 100%;

  th,
  td {
    border: 2px solid #d9d0c7;
  }
`;

export const CustonTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;