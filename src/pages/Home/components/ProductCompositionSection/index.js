import {
  ProductCompositionContainer,
  InsideUltraDentino,
  Lactobacillus,
  Minerals,
  LactobacillusImage,
  MineralsImage,
  MineralsContent,
  LactobacillusContent,
} from "./styles";
import Lactis from "./images/B.lactis.jpg";
import LactobacillusParacasei from "./images/LactobacillusParacasei.jpg";
import LactobacillusReuteri from "./images/LactobacillusReuteri.jpg";
import Composition from "./images/Composition.jpg";

const ProductCompositionSection = () => {
  return (
    <ProductCompositionContainer id="ProductComposition">
      <InsideUltraDentino>
        <h3>Inside every ProDentim you’ll find:</h3>
        <p>
          3 ingredientes únicos do ultra blend que possuem comprovação clínica:
        </p>
      </InsideUltraDentino>
      <Lactobacillus>
        <div>
          <LactobacillusImage>
            <img src={Lactis} alt="Lactis" />
          </LactobacillusImage>
          <LactobacillusContent>
            <h2>Lactobacillus Paracasei</h2>
            <p>
              <i className="fa-solid fa-circle-check"></i>Melhora a saúde bucal
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>
              Diminui a congestão nasal
            </p>
          </LactobacillusContent>
        </div>
        <div>
          <LactobacillusImage>
            <img src={LactobacillusReuteri} alt="" />
          </LactobacillusImage>
          <LactobacillusContent>
            <h2>Lactobacillus Reuteri</h2>
            <p>
              <i className="fa-solid fa-circle-check"></i>Diminui a inflamação
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>Melhora a flora bucal
            </p>
          </LactobacillusContent>
        </div>
        <div>
          <LactobacillusImage>
            <img src={LactobacillusParacasei} alt="LactobacillusParacasei" />
          </LactobacillusImage>
          <LactobacillusContent>
            <h2>Bifidobacterium lactis</h2>
            <p>
              <i className="fa-solid fa-circle-check"></i>Aumenta a imunidade
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>
              Ajuda o sistema respiratório
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>
              Mantém o balanço de bactérias boas na boca
            </p>
          </LactobacillusContent>
        </div>
      </Lactobacillus>
      <Minerals>
        <MineralsImage>
          <img src={Composition} alt="Composition" />
        </MineralsImage>
        <MineralsContent>
          <h2>Dentro do ultra blend tem 5 plantas, vitaminas e minerais:</h2>
          <p>
            <i className="fa-solid fa-circle-check"></i>inulina aumenta a
            densidade de bactérias boas
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Ácido málico clarea os
            dentes
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Fosfato tricálcio mantém
            os dentes saudáveis
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Hortelã-pimenta anti
            inflamatório natural
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Colecalciferol dentes
            mais fortes
          </p>
        </MineralsContent>
      </Minerals>
    </ProductCompositionContainer>
  );
};

export default ProductCompositionSection;
