import styled from "styled-components";

const desktop = 994;

export const BonusSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #59c1bd;
  align-items: center;
  row-gap: 40px;
`;

export const Title = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 25px;
    width: 60%;
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  width: 90%;
  max-width: 650px;

  @media (min-width: ${desktop}px) {
    flex-direction: row;
    justify-content: center;
    max-width: none;
    align-items: stretch;
    column-gap: 40px;
  }
`;

export const BonusCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 6px solid black;
  padding: 10px;
  max-width: 500px;

  div {
    background-color: white;
    width: 99%;
  }

  img {
    margin: 0 auto;
    display: block;
    width: 70%;
  }

  h3,
  h2,
  p {
    text-align: center;
  }

  h3 {
    background-color: #0c0647;
    padding: 10px 0;
    color: white;
    b {
      color: yellow;
    }
  }

  p {
    margin: 10px 40px 10px;
    font-size: 20px;
    line-height: 1.6em;
  }

  h2 {
    margin: 20px 20px 10px;
    font-size: 26px;
    font-weight: normal;
  }

  @media (min-width: ${desktop}px) {
    max-width: 500px;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const FreeShip = styled.div`
  background-color: #00005c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${desktop}px) {
    div:nth-child(1) {
      flex-direction: row;
    }
  }
`;

export const ShipImage = styled.div`
  margin-bottom: 20px;
  img {
    width: 30%;
    max-width: 550px;
    border-radius: 50%;
  }

  @media (min-width: ${desktop}px) {
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
`;

export const ShipContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;

  h3 {
    color: white;
    font-size: 25px;
    margin-bottom: 10px;
    b {
      color: yellow;
    }
  }

  p {
    font-size: 20px;
    color: white;
  }
  @media (min-width: ${desktop}px) {
  }
`;
