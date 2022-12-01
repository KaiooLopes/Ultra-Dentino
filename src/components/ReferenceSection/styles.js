import styled from "styled-components";

const desktop = 994;

export const ReferenceSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 30px;

  @media (min-width: ${desktop}px) {
    flex-direction: row;
    margin: 40px 0;
    padding: 0 20px;
    justify-content: center;
  }
`;

export const DoctorImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  img {
    max-width: 300px;
    width: 50%;
    border: 5px solid black;
    border-radius: 20px;
  }

  @media (min-width: ${desktop}px) {
    width: 30%;
    justify-content: left;
    min-width: 350px;
    img {
      width: 300px;
      max-width: none;
    }
  }
`;

export const ReferenceContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 700px;
  h3 {
    font-size: 22px;
    font-weight: bold;
    color: #24b40d;
  }
  p:nth-of-type(1) {
    font-size: 25px;
    font-weight: bold;
    color: #363636;
  }
  span {
    font-size: 22px;
    font-weight: bold;
    color: #24b40d;
  }
  p:nth-of-type(2) {
    color: #363636;
    font-size: 22px;
    line-height: 1.5;
  }
`;

export const ReferalLink = styled.div`
  display: flex;
  justify-content: right;
  a {
    font-size: 20px;
    color: #6d6d6d;
    text-decoration: none;
  }
`;
