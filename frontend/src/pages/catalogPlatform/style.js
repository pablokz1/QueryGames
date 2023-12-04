import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .wrapper {
    text-align: center;
  }

  .container-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .logo {
      width: 100px;
      height: 100px;
    }

    p {
      margin-top: 10px;
      font-weight: bold;
    }
  }

  h1 {
    margin-bottom: 20px;
  }

  .box-text {
    margin-bottom: 20px;

    .input {
      width: 300px;
      height: 40px;
      padding: 5px;
    }
  }

  .button {
    width: 150px;
    height: 40px;
    background-color: #262626;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #fec163;
      color: #0d0d0d;
    }
  }
`;

export const WallpaperSection = styled.section`
  img {
    width: 100%;
  }
`;
