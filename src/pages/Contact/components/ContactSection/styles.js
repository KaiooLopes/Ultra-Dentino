import styled from "styled-components";

const desktop = 994;

export const ContactSectionContainer = styled.div`
  @media (min-width: ${desktop}px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: #145683;
  text-shadow: 1px 1px 3px #052840;
  text-decoration: underline;
  text-align: center;
  font-size: 45px;
  margin: 10px 0;
`;
