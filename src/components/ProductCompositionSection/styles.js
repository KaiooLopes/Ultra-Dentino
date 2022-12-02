import styled from "styled-components";

const desktop = 994;

export const ProductCompositionContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin: 0 auto;
  padding: 20px 0 40px;

  @media (min-width: ${desktop}px) {
    width: 90%;
    justify-content: center;
  }
`;

export const InsideUltraDentino = styled.div`
  margin-top: 50px;
  display: flex;
  text-align: center;
  flex-direction: column;
  row-gap: 20px;
  h3 {
    font-weight: bold;
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }

  @media (min-width: ${desktop}px) {
    width: 50%;
    margin: 0 auto;
    max-width: 660px;
  }
`;

export const Lactobacillus = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;

  div {
    * {
      margin-left: auto;
      margin-right: auto;
      max-width: 500px;
    }
  }
  @media (min-width: ${desktop}px) {
    flex-direction: row;
    column-gap: 20px;
    max-width: none;
    div {
      padding: 0 10px;
    }
  }
`;

export const LactobacillusImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px;
  img {
    width: 190px;
    height: 190px;
    box-shadow: 1px 1px 10px gray;
    border: 5px solid white;
    border-radius: 50%;
  }
`;
export const LactobacillusContent = styled.div`
  h2 {
    text-align: center;
    background-color: #00005c;
    color: white;
    font-weight: bold;
    padding: 6px;
    border-radius: 10px;
  }

  p {
    margin: 10px 0;
    font-size: 17px;
    color: black;
  }

  p i {
    color: blue;
    margin-right: 10px;
  }
`;

export const Minerals = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #97c3c3;
  border-radius: 10px;
  padding-bottom: 20px;
  margin: 0 auto;
  max-width: 650px;
  @media (min-width: ${desktop}px) {
    border-radius: 20px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 0;
    margin: 0 auto;
    max-width: 1100px;
  }
`;

export const MineralsImage = styled.div`
  img {
    width: 100%;
  }

  @media (min-width: ${desktop}px) {
    width: 40%;
    img {
      border-radius: 19px 0 0 19px;
      height: 100%;
    }
  }
`;
export const MineralsContent = styled.div`
  h2 {
    margin: 20px auto 20px;
    width: 96%;
  }
  p {
    margin: 5px auto;
    width: 96%;
  }
  p {
  }

  p i {
    color: green;
    margin-right: 10px;
  }
  @media (min-width: ${desktop}px) {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 10px 0 20px;
    }
    p {
      margin: 4px 0;
    }
  }
`;
