import styled from "styled-components";

export const ReferencesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
`;
export const ReferencesContent = styled.div`
  width: 90%;
  margin-bottom: 30px;
  p {
    font-size: 19px;
    line-height: 2.3em;
    transition: 0.3s;

    &:hover {
      color: #0076ff;
    }
  }
`;

export const LabelImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    width: 75%;
  }
`;
