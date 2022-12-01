import styled from "styled-components";
import backgroundMob from "./images/backgroundMob.png";
import backgroundDesk from "./images/backgroundDesk.png";

export const SatifactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundMob});
  padding: 0px 15px;
  padding-top: 30px;
  @media (min-width: 992px) {
    background-image: url(${backgroundDesk});
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const SatisfactionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 0px 15px;
  margin: 48px 0px;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: auto;
  }
`;

export const Garantia = styled.img`
  height: 204px;
  width: auto;
  padding-bottom: 24px;
  margin-top: 32px;
  margin-bottom: 16px;
  @media (min-width: 992px) {
    margin: 50px;
  }
`;

export const SatifactionTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  gap: 10px;
  @media (min-width: 992px) {
    width: 642px;
  }
`;

export const SatisfactionTitle = styled.p`
  b {
    font-size: 23px;
    line-height: 1.2px;
    font-weight: 800;
    text-align: start;
    margin-bottom: 8px;
  }
`;

export const SatisfactionP = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #272727;
  margin-bottom: 10px;
`;
