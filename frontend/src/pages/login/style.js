import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  margin: 0;
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

  h1 {
    color: #212121;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 50px;
    margin-top: 50px;
    letter-spacing: 7px;
  }
`;

export const ForgotPasswordLink = styled.a`
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
  top: 8px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #d9d9d9;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  outline: none;
  font-size: 0.9em;
  padding: 18px 10px 10px;
  font-weight: 600;
  font-style: italic;
  color: #595959;
`;

export const WallpaperContainer = styled.section`
  img {
    height: 100vh;
    width: auto;
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;

    @media (max-width: 768px) {
      display: none;
  }
`;

// export const MediaQueryStyles = styled.div`
//   @media (max-width: 768px) {
//     .wallpaper {
//       display: none;
//     }

//     main {
//       flex-direction: column;
//     }

//     h1 {
//       font-size: 24px;
//       letter-spacing: 1px;
//       text-align: center;
//     }

//     p {
//       font-size: 16px;
//       text-align: center;
//     }

//     .logo {
//       width: 250px;
//     }

//     .button {
//       width: 120px;
//       height: 32px;
//     }

//     .box-text {
//       max-width: 250px;
//     }

//     .input {
//       padding: 15px 10px;
//       font-size: 0.8em;
//     }
//   }
// `;
