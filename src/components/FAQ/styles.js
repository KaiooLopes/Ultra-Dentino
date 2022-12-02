import styled from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (min-width: 992px) {
    margin: 50px 150px;
  }
`;

export const FAQTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: #272727;
`;

export const FAQParagraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const FAQPTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  text-align: start;
  color: #272727;
  margin: 48px 0px 15px 0px;
  padding: 0px 15px;
  @media (min-width: 992px) {
  }
`;

export const FAQP = styled.p`
  font-size: 24px;
  text-align: start;
  color: #272727;
  padding: 0px 15px;
`;
