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
            <h2>Porque você deve experimentar</h2>
            <h1>
              <i className="fa-solid fa-circle"></i>UltraDentino
              <i className="fa-solid fa-circle"></i>
            </h1>
          </Title>
          <p>
            UltraDentino é o único com o ultra blend de probióticos que
            reconstrói a flora bucal, possui garantia de satisfação de 60 dias e
            se você não gostar de ter um sorriso de hollywood devolvemos o seu
            dinheiro até o último centavo.
          </p>
          <p>
            Every ProDentim you chew will support the good health of your gums
            and teeth.
          </p>
        </WhyCreatedContent>
        <ProductImage>
          <img src={ProductImg} alt="Product" />
        </ProductImage>
      </WhyCreatedSectionContainer>
    </Background>
  );
};

export default WhyCreatedSection;
