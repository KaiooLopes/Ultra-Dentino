import { MadeBrazilContainer, MadeBrazilImg } from "./styles";
import anvisa from "./images/Anvisa.png";
import MBrazil from "./images/Made_Brazil.png";
import Natural from "./images/Natural.png";

function MadeBrazil() {
  return (
    <MadeBrazilContainer>
      <MadeBrazilImg name="anvisa" src={anvisa} />
      <MadeBrazilImg src={Natural} />
      <MadeBrazilImg src={MBrazil} />
    </MadeBrazilContainer>
  );
}

export default MadeBrazil;
