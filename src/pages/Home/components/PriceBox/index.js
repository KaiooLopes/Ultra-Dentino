import {
  DiscountBox,
  DiscountText,
  FiveStars,
  PriceBoxContainer,
  ReviewBox,
  ReviewFP,
  ReviewSP,
  Triangle,
  TriangleBox,
  PurchaseContainer,
} from "./styles.js";
import imgBV from "./PriceBoxCards/cardImages/Best_Value.png";
import imgMP from "./PriceBoxCards/cardImages/Most_Popular.png";
import imgCom from "./PriceBoxCards/cardImages/Comum.png";
import fiveStars from "./images/5_estrelas.png";
import PriceBoxCards from "./PriceBoxCards/index.js";

function PriceBox() {
  return (
    <PriceBoxContainer id="PriceBox">
      <DiscountBox>
        <DiscountText>
          Compre seu UltraDentino com desconto <br /> enquanto durarem os
          estoques!
        </DiscountText>
      </DiscountBox>
      <TriangleBox>
        <Triangle />
      </TriangleBox>
      <PurchaseContainer>
        <PriceBoxCards
          name="bestValue"
          title="6 X EMBALAGENS"
          sup="180 dias de suplementos"
          source={imgBV}
          price="594"
          discount="294"
        />
        <PriceBoxCards
          name="mostPopular"
          title="3 X EMBALAGENS"
          sup="90 dias de suplementos"
          source={imgMP}
          price="297"
          discount="177"
        />
        <PriceBoxCards
          name="comum"
          title="1 X EMBALAGEM"
          sup="30 dias de suplemento"
          source={imgCom}
          price="99"
          discount="69"
        />
      </PurchaseContainer>
      <ReviewBox>
        <ReviewFP>Nossos clientes aprovam</ReviewFP>
        <FiveStars src={fiveStars} alt="" />
        <ReviewSP>
          baseado em <b>mais de 95 mil reviews!</b>
        </ReviewSP>
      </ReviewBox>
    </PriceBoxContainer>
  );
}

export default PriceBox;
