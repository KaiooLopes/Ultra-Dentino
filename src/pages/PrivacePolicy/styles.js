import styled from "styled-components";

const desktop = 994;

export const PrivacePolicyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
    margin: 40px 0;
  }
`;

export const PrivacePolicyContent = styled.div`
  width: 96%;
  margin-bottom: 40px;
  h3 {
    margin: 15px 0;
    text-decoration: underline;
  }

  p {
    word-wrap: break-word;
    font-size: 18px;
    margin-bottom: 10px;
  }

  ol {
    margin: 10px 40px;
    color: #8f8f8f;
    li {
      line-height: 1.5em;
    }
  }

  table {
    margin: 0 auto;
  }

  @media (max-width: 390px) {
    tr {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  @media (min-width: ${desktop}px) {
    width: 80%;
    td {
      padding: 16px;
      width: 280px;
    }
  }
`;
