import styled from "styled-components";

const desktop = 994;

export const HelpAndSupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 100px auto;
  row-gap: 40px;
`;
export const Title = styled.div`
  h1 {
    text-align: center;
  }
`;

export const Attendance = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 20px;
  @media (min-width: ${desktop}px) {
    justify-content: left;
    width: 50%;
    min-width: 400px;
  }
`;

export const SendFeedback = styled.div`
  border: 1px solid black;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
  form {
    width: 90%;
  }
`;

export const DivSubmit = styled.div`
  margin: 10px;
  display: flex;
  justify-content: right;
  position: relative;
  button {
    background-color: #2a5fe3;
    color: white;
    padding: 5px;
    border: none;
    transition: 0.4s;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #0f389e;
      color: white;
    }
  }
`;

export const TextareaMessage = styled.div`
  display: flex;
  width: 94%;
  justify-content: center;
  border: 1px solid black;
  &:focus-within {
    box-shadow: 2px 2px 10px black;
  }
  textarea {
    resize: none;
    padding: 10px 0;
    height: 100px;
    width: 95%;
    border: none;
    &:focus {
      outline: none;
    }
  }
  margin: 0 auto;
`;

export const Inputs = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 0 8px;
  &:focus-within {
    box-shadow: 2px 2px 10px black;
  }
  transition: 0.4s;
  border: 1px solid black;
  input {
    height: 32px;
    border: none;
    width: 90%;
    &:focus {
      outline: none;
    }
  }
`;

export const DivOptions = styled.div`
  width: 94%;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Label = styled.div`
  p {
    font-size: 13px;
  }
`;

export const Select = styled.div`
  padding: 3px;
  border: 1px solid black;
  border-radius: 5px;
  width: 55%;
  top: 0;
  right: 0;
  background-color: ${(props) => (props.disabled ? "#E5E5E5" : "white")};
  position: absolute;
  top: 5px;
  right: 0;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  ${(props) => {
    if (props.disabled) {
      return "z-index:0;";
    } else if (props.clicked2) {
      return "z-index: 1;";
    } else {
      return "z-index: 2;";
    }
  }}

  div:not(:first-child) {
    display: flex;
    flex-direction: column;
    div {
      padding: 3px 0;
      border-radius: 5px;
      p {
        margin: 0 6px;
        font-size: 13px;
      }
      &:hover {
        background-color: #307dc4;
        color: white;
      }
    }
  }
`;

export const OptionSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    font-size: 13px;
    margin: 0 6px;
  }
`;

export const Error = styled.div`
  ${(props) =>
    props.error
      ? "opacity:1;visibility:visible;"
      : "opacity:0;visibility:hidden;"}
  transition: 0.4s;
  position: absolute;
  width: 50%;
  text-align: center;
  right: 100px;
  top: -60px;
  background-color: wheat;
  border-radius: 20px 20px 0 20px;
  p {
    padding: 10px;
  }
`;
