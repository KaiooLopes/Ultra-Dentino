import styled from "styled-components";

const desktop = 994;

export const FAQSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 20px;
  max-width: 1220px;

  @media (min-width: ${desktop}px) {
    width: 60%;
    margin: 0 auto;
  }
`;
export const IntroFaq = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  i {
    font-size: 35px;
  }

  @media (min-width: ${desktop}px) {
  }
`;
export const TitleFAQ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  row-gap: 30px;
  align-items: center;
  div:nth-child(1) {
    text-align: left;
  }
  div:nth-child(2) {
    img {
      max-width: 200px;
      width: 100%;
    }
  }

  @media (min-width: ${desktop}px) {
    justify-content: space-between;
    div:nth-child(2) {
      img {
        margin-right: 5em;
      }
    }
  }
`;
