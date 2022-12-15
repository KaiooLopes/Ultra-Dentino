//styles
import { createGlobalStyle } from "styled-components";

//hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components

import Font from "./fonts/Quicksand-VariableFont_wght.ttf";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacePolicy from "./pages/PrivacePolicy";
import References from "./pages/References";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfUse from "./pages/TermsOfUse";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacepolicy" element={<PrivacePolicy />} />
          <Route path="/references" element={<References />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/shippingpolice" element={<ShippingPolicy />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
