import MultiPagesNav from "../../components/MultiPagesNav";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import { ContactContainer } from "./styles";
import FooterTexts from "../../components/FooterTexts";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactSection />
      <FAQSection />
      <MultiPagesNav />
      <FooterTexts />
    </ContactContainer>
  );
};

export default Contact;
