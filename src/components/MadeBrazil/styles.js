import styled from "styled-components";

export const MadeBrazilContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #00005c;
  gap: 100px;
  padding: 20px 300px 20px 150px;
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
