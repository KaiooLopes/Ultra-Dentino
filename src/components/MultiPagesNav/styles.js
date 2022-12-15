import styled from "styled-components";

const desktop = 994;

export const MultiPagesNavContainer = styled.div`
  background-color: #00005c;
  display: flex;
  justify-content: center;
  height: 90px;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 2px;

    &:hover {
      color: #c3c3c3;
    }
  }

  @media (min-width: ${desktop}px) {
    width: 70%;
  }
`;
