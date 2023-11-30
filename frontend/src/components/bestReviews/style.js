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

  @media (max-width: 768px) {
    width: 1000%;
  }
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

  @media (max-width: 768px) {
    width: 95%;
  }

`;

export const GameImage = styled.img`
  max-width: 70%;
  height: 75%;
  border-radius: 8px;
  margin-bottom: 10px;
  
`;