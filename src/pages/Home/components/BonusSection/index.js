import {
  BonusSectionContainer,
  Title,
  Cards,
  BonusCard1,
  BonusCard2,
  FreeShip,
  ShipImage,
  ShipContent,
} from "./styles";
import Product from "./images/Product.png";
import Ship from "./images/Ship.jpg";

const BonusSection = () => {
  return (
    <BonusSectionContainer>
      <Title>
        <h1>Order 6 Bottles or 3 Bottles and Get 2 FREE Bonuses!</h1>
      </Title>
      <Cards>
        <BonusCard1>
          <div>
            <img src={Product} alt="product" />
            <h3>
              <b>Bonus #1</b> - Bad Breath Gone. One Day Detox
            </h3>
            <h2>
              <b>RRP - $109</b> Today: <b>FREE</b>
            </h2>
            <p>
              Kickstart your ProDentim journey and enjoy fresh breath naturally
              with 7 unexpected spice and herb mixes from your kitchen that can
              do wonders.
            </p>
          </div>
        </BonusCard1>

        <BonusCard1>
          <div>
            <img src={Product} alt="product" />
            <h3>
              <b>Bonus #2</b> - Hollywood White Teeth at Home
            </h3>
            <h2>
              <b>RRP - $109</b> Today: <b>FREE</b>
            </h2>
            <p>
              Find out everything about the simple 10 second “Bright Teeth”
              method you can do right now. You’ll also discover one little-known
              brushing trick that’s very popular among celebrities and more!
            </p>
          </div>
        </BonusCard1>
      </Cards>
    </BonusSectionContainer>
  );
};

export default BonusSection;
