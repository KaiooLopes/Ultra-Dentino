import { FAQSectionContainer, IntroFaq, TitleFAQ } from "./styles";

import FAQImage from "./images/FAQ.png";

const FAQSection = () => {
  return (
    <FAQSectionContainer>
      <IntroFaq>
        <TitleFAQ>
          <div>
            <h1>UltraDentino</h1>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div>
            <img src={FAQImage} alt="faq" />
          </div>
        </TitleFAQ>
        <span>
          <i className="fa-solid fa-angles-down"></i>
        </span>
      </IntroFaq>
    </FAQSectionContainer>
  );
};

export default FAQSection;
