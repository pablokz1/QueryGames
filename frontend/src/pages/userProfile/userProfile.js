import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f1bf5e;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #262626;
  }

  body {
    background-color: #262626;
    scrollbar-width: thin;
    scrollbar-color: #f1bf5e #595959;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #f1bf5e;
  }

  body::-webkit-scrollbar-track {
    background-color: #262626;
  }
`;

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

  h1 {
    font-family: Open Sans;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #d9d0c7;
    padding: 10px;
    margin-left: 20px;
  }

  .my-list {
    overflow-x: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
  }

  .games {
    display: flex;
    gap: 20px;
    scroll-behavior: smooth;
    width: 100%;
    flex-wrap: nowrap;

    > div {
      border-radius: 8px;
      color: #fff;
      flex: 0 0 auto;
      padding: 10px;
      scroll-snap-align: start;
      text-align: center;
      width: 25%;
      height: 25em;

      img {
        max-width: 70%;
        height: 80%;
        border-radius: 8px;
        margin-bottom: 10px;

        &:hover {
          border: 2px solid #f1bf5e;
        }
      }
    }
  }

  .box-text {
    font-family: Open Sans;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: left;
    padding: 10px;
    background: transparent;
    border: none;

    select {
      color: #d9d0c7;
      font-family: Open Sans;
      font-size: 22px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0.02em;
      text-align: left;
      padding: 10px;
      background: transparent;
      border: none;
      margin-left: 10px;
    }

    option {
      color: #0d0d0d;
    }
  }

  @media (max-width: 768px) {
    ${ContainerUser} {
      margin: 20px 0;
      width: 100%;

      .image-user {
        width: 60px;
      }

      .data-user p1 {
        font-size: 16px;
      }

      .data-user p2 {
        font-size: 13px;
      }

      .btn-register-game {
        background-color: #262626;
        color: #d9d0c7;
        border-radius: 4px;
        width: 102px;
        height: 25px;
        font-size: 10px;
      }

      .btn-config {
        display: none;
      }
    }

    overflow-x: auto;
    white-space: nowrap;
  }
`;

