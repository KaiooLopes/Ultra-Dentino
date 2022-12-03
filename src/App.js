//styles
import { createGlobalStyle } from "styled-components";
import BonusSection from "./components/BonusSection";
import FAQ from "./components/FAQ";
import MadeBrazil from "./components/MadeBrazil";

//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";
import ProductApresentationSection from "./components/ProductApresentationSection";
import ProductCompositionSection from "./components/ProductCompositionSection";
import ReferenceSection from "./components/ReferenceSection";
import SatisfactionSection from "./components/SatifactionSection";
import ScientificSection from "./components/ScientificSection";
import UltraDentinoSection from "./components/UltraDentinoSection";
import UsersFeedbackSection from "./components/UsersFeedbackSection";
import WhyCreatedSection from "./components/WhyCreatedSection";
import Font from "./fonts/Quicksand-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }
  
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
      <BonusSection />
      <UsersFeedbackSection />
      <PriceBox />
      <SatisfactionSection />
      <MadeBrazil />
      <FAQ />
      <PriceBox />
      <ScientificSection />
    </>
  );
}

export default App;
