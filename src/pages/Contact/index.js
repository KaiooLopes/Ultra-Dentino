import MultiPagesNav from "../../components/MultiPagesNav";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import { ContactContainer } from "./styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactSection />
      <FAQSection />
      <MultiPagesNav />
    </ContactContainer>
  );
};

export default Contact;
