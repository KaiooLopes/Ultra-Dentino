import styled from "styled-components";
import Blueberry from "./images/blueberry.png";

const desktop = 994;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Blueberry});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  /* provisorio */
  margin-bottom: 20px;
  padding: 40px 0;
`;

export const UltraDentinoContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  width: 70%;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled.div`
  margin-top: 20px;
  h1 {
    font-size: 35px;
  }
  h1 i {
    vertical-align: middle;
    font-size: 10px;
    margin: 0 10px;
  }

  @media (min-width: ${desktop}px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const UltraDentinoUl = styled.div`
  width: 90%;
  margin-bottom: 20px;
  ul {
    list-style-type: none;
  }

  li {
    margin: 10px 0;
    font-size: 22px;
  }

  li i {
    margin-right: 15px;
    color: green;
  }

  @media (min-width: ${desktop}px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: space-between;
    }

    li {
      width: 32%;
    }
  }
`;
