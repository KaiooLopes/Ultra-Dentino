import {
  Garantia,
  SatifactionContainer,
  SatifactionTexts,
  SatisfactionInner,
  SatisfactionTitle,
} from "./styles";
import garantia from "./images/garantia.png";

function SatisfactionSection() {
  return (
    <SatifactionContainer>
      <SatisfactionInner>
        <Garantia src={garantia} />
        <SatifactionTexts>
          <SatisfactionTitle>
            <b>Garantia de devolução do dinheiro de 60 dias!</b>
          </SatisfactionTitle>
        </SatifactionTexts>
      </SatisfactionInner>
    </SatifactionContainer>
  );
}

export default SatisfactionSection;
