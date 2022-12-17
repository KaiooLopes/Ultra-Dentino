import styled from "styled-components";

export const QuestionAndAnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  display: flex;
  padding: 4px 15px;
  justify-content: space-between;
  border-radius: 3px;
  cursor: pointer;
  min-height: 50px;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    i {
      font-size: 53px;
      margin-right: 10px;
      color: #5399a5;
    }
    h3 {
      ${(props) => (props.open ? "font-weight: bold;" : "font-weight: normal;")}
      font-size: 20px;
    }
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;
export const Answer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 19px;
    line-height: 1.5em;
  }

  i {
    font-size: 53px;
    margin: 0 30px;
    color: #5399a5;
  }
`;
