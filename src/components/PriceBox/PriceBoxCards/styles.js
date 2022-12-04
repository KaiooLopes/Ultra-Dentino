import styled from "styled-components";

export const CardsBox = styled.div`
  background-color: #f9f8da;
  border-radius: 20px;
  border: #00005c 3px solid;
  margin: 20px 0px;
  box-shadow: 0 12px 28px 0 rgb(0 0 0 / 42%);
  scroll-behavior: smooth;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: 992px) {
    width: 30%;
    ${(props) => (props.name === "bestValue" ? "order: 1;" : "")}
    ${(props) => (props.name === "mostPopular" ? "order: 0;" : "")}
    ${(props) => (props.name === "comum" ? "order: 2;" : "")}
  }
`;

export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsTitle = styled.h3`
  font-family: "Roboto";
  font-size: 33px;
  text-align: center;
  color: #00005c;
  padding-top: 24px;
`;

export const CardsP = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #272727;
`;

export const CardsImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
  }
  /*  max-height: 260px;
  max-width: 100%;
  height: auto;
  padding: 0px 16px 0px 4px;
   ${(props) => (props.name === "mostPopular" ? "margin: 16px 0px;" : "")}
${(props) => (props.name === "comum" ? "margin: 16px 0px;" : "")}
${(props) => (props.name === "bestValue" ? "padding: 0px 20px 0px 5px;" : "")} 
  @media (min-width: 992px) {
    width: auto;
    ${(props) =>
    props.name === "bestValue" ? "margin: 57.6px 0px 57.6px 16px" : ""}
    ${(props) => (props.name === "comum" ? "margin: 7.75px 0px;" : "")}
  } */
`;

export const FreeEbooks = styled.img`
  width: 225px;
  height: 40px;
`;

export const CardsButton = styled.button`
  background-color: #1bab53;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0px;
  height: 50px;
  width: 250px;
  &:hover {
    cursor: pointer;
  }
`;

export const CardsPriceImg = styled.img`
  max-width: 264px;
  padding-top: 48px;
`;

export const CardsTotal = styled.p`
  font-size: 23px;
  font-weight: 300px;
`;

export const FlagsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Flags = styled.img`
  max-width: 60px;
  max-height: 25px;
`;

export const FreeShipping = styled.p`
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 300px;
  margin-bottom: 48px;
  margin-top: 10px;
`;
