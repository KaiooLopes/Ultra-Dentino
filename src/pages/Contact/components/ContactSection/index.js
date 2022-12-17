import ContactUs from "../../../../components/ContactUs";
import { ContactSectionContainer, Title } from "./styles";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <Title>
        <Link to="/">UltraDentino</Link>
      </Title>
      <ContactUs />
    </ContactSectionContainer>
  );
};

export default ContactSection;
