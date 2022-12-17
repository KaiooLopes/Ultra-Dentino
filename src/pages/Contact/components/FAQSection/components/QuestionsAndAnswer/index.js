import { useState } from "react";
import { QuestionAndAnswerContainer, Card, Question, Answer } from "./styles";

const QuestionAndAnswer = ({ answer, question, icon }) => {
  const [open, setOpen] = useState();

  return (
    <QuestionAndAnswerContainer>
      <Card>
        <Question
          onClick={() => {
            setOpen(!open);
          }}
          open={open}
        >
          <div>
            {!open && <i className={icon}></i>}
            <h3>{question}</h3>
          </div>
          <div>
            {!open && <i className="fa-solid fa-plus"></i>}
            {open && <i className="fa-solid fa-minus"></i>}
          </div>
        </Question>
        {open && (
          <Answer>
            <i className={icon}></i>
            <p>{answer}</p>
          </Answer>
        )}
      </Card>
    </QuestionAndAnswerContainer>
  );
};

export default QuestionAndAnswer;
