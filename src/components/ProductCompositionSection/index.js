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
    <ProductCompositionContainer>
      <InsideUltraDentino>
        <h3>Inside every ProDentim you’ll find:</h3>
        <p>
          3.5 billions of probiotics, along with 3 unique ingredients that are
          clinically proven to support the health of your teeth and gums
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
              <i className="fa-solid fa-circle-check"></i>Supports the health of
              your gums
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>Helps your sinuses
              stay free and open
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
              <i className="fa-solid fa-circle-check"></i>Helps with
              inflammation
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>Supports a healthy
              mouth environment
            </p>
          </LactobacillusContent>
        </div>
        <div>
          <LactobacillusImage>
            <img src={LactobacillusParacasei} alt="LactobacillusParacasei" />
          </LactobacillusImage>
          <LactobacillusContent>
            <h2>B.lactis BL-04®</h2>
            <p>
              <i className="fa-solid fa-circle-check"></i>Supports the balance
              of mouth bacteria
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>Supports respiratory
              tract
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i>Maintains a healthy
              immune system
            </p>
          </LactobacillusContent>
        </div>
      </Lactobacillus>
      <Minerals>
        <MineralsImage>
          <img src={Composition} alt="Composition" />
        </MineralsImage>
        <MineralsContent>
          <h2>Proprietary Blend of 4 Plants and Minerals</h2>
          <p>
            <i className="fa-solid fa-circle-check"></i>Inulin supports the good
            bacteria
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Malic acid in
            strawberries helps maintain tooth whiteness
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Tricalcium Phosphate
            supports tooth health
          </p>
          <p>
            <i className="fa-solid fa-circle-check"></i>Peppermint is a natural
            anti-inflammatory
          </p>
        </MineralsContent>
      </Minerals>
    </ProductCompositionContainer>
  );
};

export default ProductCompositionSection;
