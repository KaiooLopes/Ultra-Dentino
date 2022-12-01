import styled from "styled-components";
import backgroundMob from "./images/backgroundMob.png";

export const SatifactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundMob});
  width: 100%;
  padding: 0px 15px;
  padding-top: 30px;
`;

export const SatisfactionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px 0px;
`;

export const Garantia = styled.img`
  height: 204px;
  width: auto;
  padding-bottom: 24px;
`;

export const SatifactionTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
`;

export const SatisfactionTitle = styled.p`
  font-size: 23px;
  line-height: 1.2px;
  font-weight: 500;
  text-align: start;
`;
