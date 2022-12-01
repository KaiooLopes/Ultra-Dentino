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
  @media (min-width: 992px) {
    height: 130px;
  }
`;

export const DiscountText = styled.h2`
  font-family: "Roboto";
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  color: white;
  @media (min-width: 992px) {
    font-size: 34px;
    margin-bottom: 5px;
  }
`;

export const TriangleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Triangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #00005c;
  margin-top: -20px;
  rotate: 45deg;
  @media (min-width: 992px) {
    width: 49px;
    height: 49px;
    margin-top: -25px;
  }
`;

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0px 15px 0px 15px;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    ${(props) => (props.name === "bestValue" ? "order-self: 1;" : "")}
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 188px;
  @media (min-width: 992px) {
    height: 140px;
    padding: 24px 0px 24px;
  }
`;

export const ReviewFP = styled.p`
  font-size: 24px;
  text-align: center;
  color: #272727;
`;

export const FiveStars = styled.img`
  width: 245px;
  height: auto;
  padding: 8px 0px;
  margin: 0px 22px;
`;

export const ReviewSP = styled.p`
  font-size: 24px;
  text-align: center;
  color: #272727;
`;
