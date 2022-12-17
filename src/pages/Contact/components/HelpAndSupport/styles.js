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
    div:nth-child(1),
    div:nth-child(2) {
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
    }
    div:nth-child(3) {
      display: flex;
      width: 94%;
      justify-content: center;
      border: 1px solid black;
      &:focus-within {
        box-shadow: 2px 2px 10px black;
      }
      textarea {
        padding: 10px 0;
        height: 100px;
        width: 95%;
        border: none;
        &:focus {
          outline: none;
        }
      }
      margin: 0 auto;
    }
    div:nth-child(4),
    div:nth-child(5),
    div:nth-child(6) {
      width: 94%;
      margin: 15px auto;
      display: flex;
      justify-content: space-between;
      select {
        width: 60%;
      }
    }
    div:nth-child(7) {
      margin: 10px;
      display: flex;
      justify-content: right;
      button {
        background-color: #71adc5;
        color: white;
        padding: 5px;
        border: 1px solid black;
        box-shadow: 1px 1px 5px black;
        transition: 0.4s;
        cursor: pointer;
        &:hover {
          background-color: #337a96;
        }
      }
    }
  }
`;
