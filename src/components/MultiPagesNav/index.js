import { MultiPagesNavContainer, Links } from "./styles";

//hooks
import { Link } from "react-router-dom";

const MultiPagesNav = () => {
  return (
    <MultiPagesNavContainer>
      <Links>
        <Link to="/contact" target="_blank">
          Contato
        </Link>
        <Link to="/references" target="_blank">
          Referências
        </Link>
        <Link to="/termsofuse" target="_blank">
          Termos de uso
        </Link>
        <Link to="/disclaimer" target="_blank">
          Aviso legal
        </Link>
        <Link to="/privacepolicy" target="_blank">
          Políticas de privacidade
        </Link>
        <Link to="/shippingpolicy" target="_blank">
          Políticas de envio
        </Link>
        <Link to="/refundpolicy" target="_blank">
          Políticas de reembolso
        </Link>
      </Links>
    </MultiPagesNavContainer>
  );
};

export default MultiPagesNav;
