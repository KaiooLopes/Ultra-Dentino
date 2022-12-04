import styled from "styled-components";

export const MadeBrazilContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00005c;
  gap: 20px;
  padding: 20px 0px;
  @media (min-width: 992px) {
    justify-content: space-around;
    gap: 100px;
    flex-direction: row;
    padding: 20px 300px 20px 150px;
  }
`;

export const MadeBrazilImg = styled.img`
  height: 40px;
  width: auto;
  @media (min-width: 992px) {
    width: auto;
    height: 100px;
    ${(props) => (props.name === "anvisa" ? "height: 75px" : "")}
  }
`;
