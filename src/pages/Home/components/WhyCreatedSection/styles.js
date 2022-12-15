import styled from "styled-components";
import Blueberry from "./images/blueberry.png";

const desktop = 994;

export const Background = styled.div`
  background-image: url(${Blueberry});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;

export const WhyCreatedSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 80%;
  margin: 60px 0;
  padding: 10px;
  background-color: white;
  border-radius: 10px;

  @media (min-width: ${desktop}px) {
    padding: 40px;
    flex-direction: row;
    max-width: none;
    width: 80%;
    min-width: 850px;
    max-width: 1100px;
  }
`;

export const WhyCreatedContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  p:nth-of-type(1) {
    b {
      color: #393939;
    }
    color: #3b3b3b;
    font-size: 20px;
  }

  p:nth-of-type(2) {
    background-color: #0c0647;
    padding: 10px;
    color: #d8d8d8;
    font-size: 19px;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 35px;
  }

  h1 i {
    vertical-align: middle;
    font-size: 10px;
    margin: 0 10px;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: ${desktop}px) {
    align-items: flex-end;
    img {
      max-height: 250px;
      min-width: 300px;
    }
  }
`;
