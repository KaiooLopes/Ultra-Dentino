import {
  ClickBankContainer,
  ClickBankContent,
  NameSite,
  SecureMessage,
} from "./styles";

const ClickBank = () => {
  return (
    <ClickBankContainer>
      <ClickBankContent>
        <SecureMessage>
          <NameSite>Click</NameSite>Bank | Trusted
          <i className="fa-solid fa-lock"></i>Secure
        </SecureMessage>
      </ClickBankContent>
    </ClickBankContainer>
  );
};

export default ClickBank;
