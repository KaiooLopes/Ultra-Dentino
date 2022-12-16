import {
  ProductApresentationContainer,
  ProductApresentationContent,
  ImageProduct,
} from "./styles";
import Product from "./images/Product.png";
import Made from "./images/Made.png";
import Natural from "./images/Natural.png";
import Anvisa from "./images/Anvisa.png";

const ProductApresentationSection = () => {
  return (
    <ProductApresentationContainer>
      <ImageProduct>
        <img src={Product} alt="Product Apresentation" />
      </ImageProduct>
      <ProductApresentationContent>
        <div>
          <p>
            NOVO: o futuro da saúde bucal, UltraDentino é desenvolvido para
            hálitos refrescantes, sorrisos de holywood e uma saúde bucal
            perfeita.
          </p>
        </div>
        <div>
          <p>
            <b>Experimente UltraDentino:</b> Com mais de 3 bilhões de
            nutrientes, probióticos, vitaminas testados e comprovados
            cientificamente.
          </p>
        </div>
        <div>
          <img src={Natural} alt="Produto Natural" />
          <img src={Anvisa} alt="Selo Anvisa" />
          <img src={Made} alt="Made in Brazil" />
        </div>
      </ProductApresentationContent>
    </ProductApresentationContainer>
  );
};

export default ProductApresentationSection;
