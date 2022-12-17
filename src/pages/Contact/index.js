import MultiPagesNav from "../../components/MultiPagesNav";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import HelpAndSupport from "./components/HelpAndSupport";
import { ContactContainer } from "./styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactSection />
      <FAQSection />
      <HelpAndSupport />
      <MultiPagesNav />
    </ContactContainer>
  );
};

export default Contact;
