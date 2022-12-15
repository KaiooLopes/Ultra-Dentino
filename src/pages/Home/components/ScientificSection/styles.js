import styled from "styled-components";

const desktop = 994;

export const ScientificContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 48px auto;
  width: 95%;
  max-width: 100%;
`;

export const ScientificTitle = styled.h3`
  font-size: 28px;
  text-align: center;
`;

export const ScientificListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;
  max-width: 100%;
  @media (min-width: ${desktop}px) {
    flex-direction: row;
  }
`;

export const ScientificList = styled.ol`
  font-size: 14px;
  max-width: 100%;
  li {
    list-style-position: inside;
    list-style-type: decimal;

    p {
      word-wrap: break-word;
    }
  }
`;
