//styles
import { createGlobalStyle } from "styled-components";

//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";
import ProductApresentation from "./components/ProductPresentation";
import ReferenceSection from "./components/ReferenceSection";
import SatisfactionSection from "./components/SatifactionSection";
import UltraDentinoSection from "./components/UltraDentinoSection";
import WhyCreatedSection from "./components/WhyCreatedSection";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    </>
  );
}

export default App;
