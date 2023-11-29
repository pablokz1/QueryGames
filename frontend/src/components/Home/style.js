import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/image/stadiumImage.webp";
export const Container = styled.section`
    background-image: url(${backgroundImage});
    background-size: cover;
    width:100%;
    height:90vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `
export const ContainerText = styled.section`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    margin-right:3%;
    font-weight:700;
    font-size:1.2rem;
    p {
        b {
            color: yellow; 
        }
    }
`
