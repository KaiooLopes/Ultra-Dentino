//styles
import { createGlobalStyle } from "styled-components";
import MadeBrazil from "./components/MadeBrazil";

//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";
import ProductApresentation from "./components/ProductPresentation";
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
      <ProductApresentation />
      <ReferenceSection />
      <WhyCreatedSection />
      <UltraDentinoSection />
      <PriceBox />
      <SatisfactionSection />
      <MadeBrazil />
    </>
  );
}

export default App;
