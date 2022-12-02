import styled from "styled-components";

const desktop = 994;

export const UsersFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  margin-top: 30px;
  h1 {
    text-align: center;
    font-size: 22px;
  }
`;

export const Polaroids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  img {
    width: 40%;
    max-width: 250px;
    margin: 0 10px;
    background-color: white;
    padding: 10px 10px 30px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px gray;
  }

  div:nth-child(1) img:nth-of-type(1) {
    transform: rotate(-5deg);
  }
  div:nth-child(1) img:nth-of-type(2) {
    transform: rotate(6deg);
  }
  div:nth-child(2) img:nth-of-type(1) {
    transform: rotate(-10deg);
  }
  div:nth-child(2) img:nth-of-type(2) {
    transform: rotate(8deg);
  }

  @media (min-width: ${desktop}px) {
    flex-direction: row;
  }
`;

export const UsersComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export const PostUser = styled.div`
  width: 70%;
  display: flex;
  max-width: 1200px;
`;

export const UserImage = styled.div`
  display: none;
  @media (min-width: ${desktop}px) {
    display: block;
    margin-right: 20px;
    img {
      width: 100px;
      border-radius: 10px;
      border: 2px solid black;
    }
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 25px;
  }

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      width: 30%;
      max-width: 160px;
    }
    p {
      font-weight: bold;
    }
  }
  div:nth-of-type(2) {
    p:nth-child(1) {
      margin: 10px 0;
      font-size: 20px;
      line-height: 1.7em;
    }

    p:nth-child(2) {
      font-size: 18px;
    }
  }
`;
