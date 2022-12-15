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
            Novos Probióticos Especialmente Desenvolvidos Para A Saúde De Seus
            Dentes E Gengivas
          </p>
        </div>
        <div>
          <p>
            <b>Experimente UltraDentino:</b> um blend único de 3.5 bilhões de
            propioticos e nutrientes aprovados por pesquisas clínicas
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
