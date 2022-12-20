import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 20px;
`;

export const ContactUsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 0px 15px;
  p,
  a {
    font-size: 14px;
    font-weight: 400;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 994px) {
    padding: 0px 25px;
    margin: 0px 32px;
  }
`;

export const InfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 10px;
  margin: 20px 0px;
  padding: 0px 15px;
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CopyRight = styled.div`
  background-color: #6c757d;
  padding: 24px 0px;
  font-size: 16px;
  text-align: center;
`;
