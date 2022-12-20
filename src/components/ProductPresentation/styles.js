import styled from "styled-components";

const desktop = 994;

export const ProductApresentationContainer = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  background-color: #59c1bd;

  @media (min-width: ${desktop}px) {
    flex-direction: row;
  }
`;

export const ImageProduct = styled.div`
  margin: 20px 0 10px;
  img {
    width: 100%;
    max-width: 750px;
  }

  @media (min-width: ${desktop}px) {
    min-width: 380px;
  }
`;

export const ProductApresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    margin: 20px 0;
    max-width: 500px;
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
  div:nth-child(2) {
    margin: 30px 0;
    font-size: 24px;
    color: white;
  }

  div:nth-child(3) {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img:nth-child(2) {
      width: 200px;
    }
    img {
      width: 80px;
    }
  }
`;
