import styled from "styled-components";

const desktop = 994;

export const TermsOfUseContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
    margin: 40px 0;
  }
`;

export const TermsOfUseContent = styled.div`
  width: 96%;
  margin-bottom: 40px;
  h3 {
    margin: 15px 0;
  }

  p {
    word-wrap: break-word;
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (min-width: ${desktop}px) {
    width: 80%;
  }
`;
