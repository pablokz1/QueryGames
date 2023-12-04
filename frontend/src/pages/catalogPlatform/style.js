import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
`;

export const CalatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: clamp(35px, 8%, 70px);
`;

export const CatalogWrapper = styled.div`
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

export const InputBox = styled.label`
  width: 280px;
  height: 50px;
  display: block;
  margin-bottom: 30px;
  position: relative;
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
    height: 100%;
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
