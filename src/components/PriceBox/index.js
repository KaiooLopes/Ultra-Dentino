import PriceBoxCards from "./PriceBoxCards/index.js";
import { DiscountBox, DiscountText, PriceBoxContainer } from "./styles.js";
import imgBV from "./PriceBoxCards/cardImages/Best_Value.png";

function PriceBox() {
  return (
    <PriceBoxContainer>
      <DiscountBox>
        <DiscountText>
          Compre seu UltraDentino com desconto <br /> enquanto durarem os
          estoques!
        </DiscountText>
      </DiscountBox>
      <PriceBoxCards
        name="bestValue"
        sup="180 dias de suplementos"
        source={imgBV}
        price="600,00"
        discount="299,98"
        title="6 X EMBALAGENS"
      />
    </PriceBoxContainer>
  );
}

export default PriceBox;
