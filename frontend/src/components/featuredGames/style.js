import styled from 'styled-components';

export const FeaturedSectionContainer = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #0d0d0d;
  width: 100%;

  h1 {
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #d9d0c7;
    padding: 10px;
    margin-left: 20px;
  }

  h2 {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;

export const CatalogContainer = styled.div`
  background-color: #0d0d0d;
  color: #d9d0c7;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  overflow-x: auto;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  text-align: center;
  white-space: nowrap;
`;

export const GamesContainer = styled.div`
  display: flex;
  scroll-behavior: smooth;
  width: 100%;
  gap: 0;
  flex-wrap: nowrap;
`;

export const GameItem = styled.div`
  border-radius: 8px;
  color: #fff;
  flex: 0 0 auto;
  padding: 10px;
  scroll-snap-align: start;
  text-align: center;
  width: 25%;
  height: 28em;
  transition: transform 0.3s ease-out;

  &:hover {
    background-color: #8c713b;
    transform: translateY(-5px);
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);

    p {
      opacity: 1;
    }

    h2 {
      opacity: 1;
    }

  }

  p {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  h2 {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

export const GameImage = styled.img`
  max-width: 70%;
  height: 75%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Platforms  = styled.p`
color: #0d0d0d;
`