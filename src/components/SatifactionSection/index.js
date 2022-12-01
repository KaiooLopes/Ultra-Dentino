import {
  Garantia,
  SatifactionContainer,
  SatifactionTexts,
  SatisfactionInner,
  SatisfactionP,
  SatisfactionTitle,
} from "./styles";
import garantia from "./images/garantia.png";

function SatisfactionSection() {
  return (
    <SatifactionContainer>
      <SatisfactionInner>
        <Garantia src={garantia} alt="" />
        <SatifactionTexts>
          <SatisfactionTitle>
            <b>Garantia de devolução do seu dinheiro de 60 dias</b>
          </SatisfactionTitle>
          <SatisfactionP>
            Seu pedido hoje é coberto por nosso seguro de 60 dias com 100% de
            garantia de devolução de dinheiro. Se você não está satisfeito com a
            transformação de suas gengivas e dentes ou você não gosta do seu
            novo sorriso de estrela de cinema, então, a qualquer momento nos
            próximos 60 dias, escreva para nós e nós reembolsaremos cada
            centavo.
          </SatisfactionP>
        </SatifactionTexts>
      </SatisfactionInner>
    </SatifactionContainer>
  );
}

export default SatisfactionSection;
