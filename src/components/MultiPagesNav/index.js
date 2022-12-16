import { MultiPagesNavContainer, Links } from "./styles";

//hooks
import { Link } from "react-router-dom";

const MultiPagesNav = () => {
  return (
    <MultiPagesNavContainer>
      <Links>
        <Link to="/contact" target="_blank">
          Contact
        </Link>
        <Link to="/references" target="_blank">
          References
        </Link>
        <Link to="/termsofuse" target="_blank">
          TermsOfUse
        </Link>
        <Link to="/disclaimer" target="_blank">
          Disclaimer
        </Link>
        <Link to="/privacepolicy" target="_blank">
          Privace Policy
        </Link>
        <Link to="/shippingpolicy" target="_blank">
          Shipping Policy
        </Link>
        <Link to="/refundpolicy" target="_blank">
          Refund Policy
        </Link>
      </Links>
    </MultiPagesNavContainer>
  );
};

export default MultiPagesNav;
