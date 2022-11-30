import {
  BestValueBox,
  BestValueButton,
  BestValueContent,
  BestValueImg,
  BestValueP,
  BestValueTitle,
  BestValueTotal,
  Flags,
  FlagsBox,
  FreeShipping,
  PurchaseContainer,
} from "./styles.js";
import visa from "./cardImages/visa.png";
import master from "./cardImages/mastercard.png";
import elo from "./cardImages/elo_1.png";
import AExpress from "./cardImages/AExpress.png";
import { Children } from "react";

function PriceBoxCards(props) {
  const { sup, source, price, discount } = props;
  return (
    <PurchaseContainer>
      <BestValueBox>
        <BestValueContent>
          <BestValueTitle>{Children}</BestValueTitle>
          <BestValueP>• {sup} •</BestValueP>
          <BestValueImg src={source}></BestValueImg>
          <BestValueButton>COMPRE AGORA!</BestValueButton>
          <BestValueTotal>
            TOTAL: <s>R$ {price}</s> <b>R$ {discount}</b>
          </BestValueTotal>
          <FlagsBox>
            <Flags src={visa} alt="" />
            <Flags src={master} alt="" />
            <Flags src={elo} alt="" />
            <Flags src={AExpress} alt="" />
          </FlagsBox>
          <FreeShipping>*Frete GRATIS</FreeShipping>
        </BestValueContent>
      </BestValueBox>
    </PurchaseContainer>
  );
}

export default PriceBoxCards;
