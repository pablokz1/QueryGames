import styled from "styled-components";
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
    color: #ffffff;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    margin-right:0.5%;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    p {
        b {
            color: #f1bf5e; 
        }
    }
`
