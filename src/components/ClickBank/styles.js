import styled from "styled-components";

export const ClickBankContainer = styled.div`
  @media (max-width: 480px) {
    display: none;
  }

  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClickBankContent = styled.p`
  font-size: 17px;
  text-transform: uppercase;
  line-height: normal;
`;

export const NameSite = styled.span`
  font-weight: 600;
  color: #333333;
`;

export const SecureMessage = styled.span`
  color: #737373;
  font-weight: normal;

  i {
    color: #737373;
    margin: 0 4px;
    padding: 0;
    font-size: 13px;
  }
`;
