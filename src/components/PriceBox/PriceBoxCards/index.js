import {
  CardsBox,
  CardsButton,
  CardsContent,
  CardsImg,
  CardsP,
  CardsTitle,
  CardsTotal,
  Flags,
  FlagsBox,
  FreeEbooks,
  FreeShipping,
} from "./styles.js";
import visa from "./cardImages/visa.png";
import master from "./cardImages/mastercard.png";
import elo from "./cardImages/elo_1.png";
import AExpress from "./cardImages/AExpress.png";
import Ebooks from "./cardImages/Bonus_Ebooks.png";

function PriceBoxCards(props) {
  const { title, sup, source, price, discount, name } = props;
  return (
    <CardsBox>
      <CardsContent>
        <CardsTitle>{title}</CardsTitle>
        <CardsP>• {sup} •</CardsP>
        <CardsImg name={name} src={source}></CardsImg>
        <FreeEbooks src={Ebooks} />
        <CardsButton href="">COMPRE AGORA</CardsButton>
        <CardsTotal>
          TOTAL: <s>R$ {price}</s> <b>R$ {discount}</b>
        </CardsTotal>
        <FlagsBox>
          <Flags src={visa} alt="" />
          <Flags src={master} alt="" />
          <Flags src={elo} alt="" />
          <Flags src={AExpress} alt="" />
        </FlagsBox>
        <FreeShipping>*Frete GRATIS</FreeShipping>
      </CardsContent>
    </CardsBox>
  );
}

export default PriceBoxCards;
