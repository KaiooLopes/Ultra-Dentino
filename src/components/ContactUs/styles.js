import styled from "styled-components";

const desktop = 994;

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media (min-width: ${desktop}px) {
    max-width: 750px;
  }
`;
export const Title = styled.h1`
  margin: 50px 0 20px;
`;
export const ContactTable = styled.table`
  border: 1px solid gray;
  border-collapse: collapse;
  td {
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    div {
      display: flex;
      margin-left: 10px;
      width: 50%;

      span {
        font-size: 12px;
        color: gray;
      }
    }
  }
  tr:nth-child(even) {
    background-color: #dcdcdc;
  }
`;

export const SupportContact = styled.div`
  flex-direction: column;
  a {
    word-wrap: break-word;
    color: #0097ff;
    text-decoration: none;
  }
`;
export const SupportName = styled.div`
  align-items: center;
`;

export const Message = styled.p`
  font-size: 20px;
  color: gray;
  margin: 20px 0 0;
`;
