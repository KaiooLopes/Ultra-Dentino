import { MultiPagesNavContainer, Links } from "./styles";

//hooks
import { Link } from "react-router-dom";

const MultiPagesNav = () => {
  return (
    <MultiPagesNavContainer>
      <Links>
        <Link to="/contact">Contact</Link>
        <Link to="/references">References</Link>
        <Link to="/termsofuse">TermsOfUse</Link>
        <Link to="/disclaimer">Disclaimer</Link>
        <Link to="/privacepolicy">Privace Policy</Link>
        <Link to="/shippingpolicy">Shipping Policy</Link>
        <Link to="/refundpolicy">Refund Policy</Link>
      </Links>
    </MultiPagesNavContainer>
  );
};

export default MultiPagesNav;
