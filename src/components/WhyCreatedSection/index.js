import {
  WhyCreatedContent,
  WhyCreatedSectionContainer,
  ProductImage,
  Title,
  Background,
} from "./styles";
import ProductImg from "./images/product.png";

const WhyCreatedSection = () => {
  return (
    <Background>
      <WhyCreatedSectionContainer>
        <WhyCreatedContent>
          <Title>
            <h2>That’s why we created</h2>
            <h1>
              <i className="fa-solid fa-circle"></i>UltraDentino
              <i className="fa-solid fa-circle"></i>
            </h1>
          </Title>
          <p>
            <b>ProDentim</b> is <b>unlike anything</b> you’ve ever tried or
            experienced in your life before.
            <br /> It’s the only product in the world with a <b>unique blend</b>
            of 3.5 billion probiotics and nutrients, specially designed to
            repopulate your mouth with <b>good bacteria</b>.
          </p>
          <p>
            Every ProDentim you chew will support the good health of your gums
            and teeth.
          </p>
        </WhyCreatedContent>
        <ProductImage>
          <img src={ProductImg} alt="Product Image" />
        </ProductImage>
      </WhyCreatedSectionContainer>
    </Background>
  );
};

export default WhyCreatedSection;
