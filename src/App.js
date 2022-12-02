//styles
import { createGlobalStyle } from "styled-components";

//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";
import ProductApresentationSection from "./components/ProductApresentationSection";
import ProductCompositionSection from "./components/ProductCompositionSection";
import ReferenceSection from "./components/ReferenceSection";
import SatisfactionSection from "./components/SatifactionSection";
import UltraDentinoSection from "./components/UltraDentinoSection";
import WhyCreatedSection from "./components/WhyCreatedSection";
import Font from "./fonts/Quicksand-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "QuickSand" ;
    src: url(${Font});
  }

  *{
    margin: 0;
    padding: 0;
    font-family: "QuickSand", sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ProductApresentationSection />
      <ReferenceSection />
      <WhyCreatedSection />
      <ProductCompositionSection />
      <UltraDentinoSection />
      <PriceBox />
      <SatisfactionSection />
    </>
  );
}

export default App;
