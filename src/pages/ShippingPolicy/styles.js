import styled from "styled-components";

export const ShippingPolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ShippingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 24px;
  margin: 20px 0px;
  gap: 10px;
  p {
    font-size: 20px;
    font-weight: 500;
    a {
      color: blue;
    }
  }
  h2 {
    margin-top: 20px;
  }
`;
