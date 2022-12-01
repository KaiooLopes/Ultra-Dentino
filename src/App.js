//styles
import { createGlobalStyle } from "styled-components";

//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";

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
      <PriceBox />
    </>
  );
}

export default App;
