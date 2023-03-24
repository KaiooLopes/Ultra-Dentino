import { ContactUsBox, CopyRight, FooterContainer, InfoTexts } from "./styles";

function FooterTexts() {
  return (
    <FooterContainer>
      <ContactUsBox>
        <p>
          Para suporte em relação à duvidas, contate nossa equipe por{" "}
          <a href="/contact">aqui</a>
        </p>
        <p>
          Para suporte em pedidos, entre em contato com nossa equipe por{" "}
          <a href="/contact">aqui</a>
        </p>
      </ContactUsBox>
      <InfoTexts>
        <p>
          Observe que as informações que fornecemos não se destinam a substituir
          a consulta com um profissional médico qualificado. Incentivamos você a
          informar seu médico sobre as mudanças que fizer em seu estilo de vida
          e discuti-las com ele. Em caso de dúvidas ou preocupações sobre
          quaisquer condições médicas que você possa ter, entre em contato com
          seu médico.
        </p>
        <p>
          As declarações neste site não foram avaliadas pela ANVISA. Os produtos
          não se destinam a diagnosticar, tratar, curar ou prevenir qualquer
          doença. Se estiver grávida, amamentando, tomando medicamentos ou tiver
          algum problema de saúde, consulte seu médico antes de usar nossos
          produtos.
        </p>
        <p>
          O conteúdo do site e o produto à venda são baseados na opinião do
          autor e são fornecidos exclusivamente "COMO SÃO" e "CONFORME
          DISPONIBILIDADE". Você deve fazer sua própria pesquisa e confirmar as
          informações com outras fontes ao pesquisar informações sobre problemas
          de saúde e sempre revisar as informações cuidadosamente com seu
          profissional de saúde antes de usar qualquer um dos protocolos
          apresentados neste site e/ou o produto vendido aqui.
        </p>
      </InfoTexts>
      <CopyRight>
        <p>
          Copyright @ 2022 <b>UltraDentino</b> | Todos os direitos reservados |
          Feito por
        </p>
        <a
          href="https://kaioportfolio.netlify.app"
          target={"_blank"}
          rel="noreferrer"
        >
          Kaio Alves Lopes
        </a>
      </CopyRight>
    </FooterContainer>
  );
}

export default FooterTexts;
