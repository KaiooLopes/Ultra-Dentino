import styled from "styled-components";

export const PriceBoxContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const DiscountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: #00005c;
  padding: 0px 15px 0px 15px;
`;

export const DiscountText = styled.h2`
  font-family: "Roboto";
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  color: white;
`;

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 96px;
  padding: 0px 15px 0px 15px;
`;

export const BestValueBox = styled.div`
  margin-top: -20px;
  background-color: #f9f8da;
  border-radius: 20px;
  border: #00005c 3px solid;
  box-shadow: 0 12px 28px 0 rgb(0 0 0 / 42%);
  scroll-behavior: smooth;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.04);
  }
`;

export const BestValueContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestValueTitle = styled.h3`
  font-family: "Roboto";
  font-size: 33px;
  text-align: center;
  color: #00005c;
  padding-top: 24px;
`;

export const BestValueP = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #272727;
`;

export const BestValueImg = styled.img`
  max-height: 260px;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 20px 16px 0px 4px;
  margin-top: 16px;
`;

export const BestValueButton = styled.button`
  background-color: #ffb200;
  border-radius: 8px;
  border: #00005c 3px solid;
  width: 300px;
  height: 65px;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 20px;
`;

export const BestValuePriceImg = styled.img`
  max-width: 264px;
  margin: 0px 37px;
  padding-top: 48px;
`;

export const BestValueTotal = styled.p`
  font-size: 23px;
  font-weight: 300px;
`;

export const FlagsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Flags = styled.img`
  max-width: 60px;
  max-height: 25px;
`;

export const FreeShipping = styled.p`
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 300px;
  margin-bottom: 48px;
  margin-top: 10px;
`;
