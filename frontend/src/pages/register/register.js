import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: clamp(35px, 8%, 70px);
  background-color: #595959;
  color: #d9d0c7;
`;

export const BoxText = styled.label`
  width: 280px;
  height: 50px;
  display: block;
  margin-bottom: 30px;
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

export const Button = styled.button`
  font-weight: 600;
  width: 146px;
  height: 36px;
  padding: 5px;
  border-radius: 4px;
  background-color: #262626;
  color: white;
  border: none;
  cursor: pointer;
`;

export const WallpaperSection = styled.section`
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
