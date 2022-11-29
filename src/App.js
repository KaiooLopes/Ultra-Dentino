//styles
import { createGlobalStyle } from "styled-components";

//components
import ClickBank from "./components/ClickBank";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ClickBank />
    </>
  );
}

export default App;
