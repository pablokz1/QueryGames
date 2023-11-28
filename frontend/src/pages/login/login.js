import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  body {
    background-color: #595959;
    scrollbar-width: thin;
    scrollbar-color: #f1bf5e #262626;
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

  body::-webkit-scrollbar-thumb {
    background-color: #f1bf5e;
  }

  body::-webkit-scrollbar-track {
    background-color: #262626;
  }
`;

export const MainContainer = styled.main`
  display: flex;
`;

export const HeaderContainer = styled.header`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 9999;
  cursor: pointer;
`;

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: clamp(35px, 8%, 70px);
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordLink = styled.a`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #d9d0c7;
  justify-content: flex-start;
  margin-bottom: 30px;
  margin-right: 10.625em;
  text-decoration: none;

  &:hover {
    color: #f1bf5e;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  width: 146px;
  height: 36px;
  padding: 5px;
  border-radius: 4px;
  background-color: #262626;
  color: white;
  border: none;
  margin-bottom: 50px;

  &:hover {
    background-color: #fec163;
    color: #0d0d0d;
    cursor: pointer;
  }
`;

export const SignUpLink = styled.a`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #d9d0c7;
  cursor: pointer;

  &:hover {
    color: #f1bf5e;
    cursor: pointer;
  }
`;

export const InputBox = styled.label`
  width: 280px;
  height: 50px;
  display: block;
  margin-bottom: 30px;
  position: relative;
`;

export const PasswordIcon = styled.i`
  font-size: 30px;
  color: #262626;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #d9d9d9;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  outline: none;
  font-size: 0.9em;
  padding: 25px 10px 10px;
  font-weight: 600;
  font-style: italic;
  color: #595959;
`;

export const WallpaperContainer = styled.section`
  img {
    height: 100%;
    width: auto;
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
  }
`;

export const MediaQueryStyles = styled.div`
  @media (max-width: 768px) {
    .wallpaper {
      display: none;
    }

    main {
      flex-direction: column;
    }

    h1 {
      font-size: 24px;
      letter-spacing: 1px;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    .logo {
      width: 250px;
    }

    .button {
      width: 120px;
      height: 32px;
    }

    .box-text {
      max-width: 250px;
    }

    .input {
      padding: 15px 10px;
      font-size: 0.8em;
    }
  }
`;
