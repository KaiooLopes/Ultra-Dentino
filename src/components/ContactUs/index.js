import { Link } from "react-router-dom";
import {
  ContactUsContainer,
  Title,
  ContactTable,
  Message,
  SupportContact,
  SupportName,
} from "./styles";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Title>How To Contact Us</Title>
      <ContactTable>
        <tbody>
          <tr>
            <td>
              <SupportName>
                <p> Product Email Support</p>
              </SupportName>
              <SupportContact>
                <Link to="/">contact@prodentim-product.com</Link>
              </SupportContact>
            </td>
          </tr>
          <tr>
            <td>
              <SupportName>
                <p> Product Phone Support</p>
              </SupportName>
              <SupportContact>
                <Link to="/">+1 (302) 754-3446Mon</Link>
                <span>- Sun 10 AM - 1 AM EST</span>
              </SupportContact>
            </td>
          </tr>
          <tr>
            <td>
              <SupportName>
                <p>Order Self Service</p>
              </SupportName>
              <SupportContact>
                <Link to="/">https://www.clkbank.com/</Link>
              </SupportContact>
            </td>
          </tr>
          <tr>
            <td>
              <SupportName>
                <p>Order Support</p>
                <span>- Toll Free - </span>
              </SupportName>
              <SupportContact>
                <Link to="/">1-800-390-6035</Link>
                <span>24/7</span>
              </SupportContact>
            </td>
          </tr>
          <tr>
            <td>
              <SupportName>
                <p>Order Support</p>
                <span>- International - </span>
              </SupportName>
              <SupportContact>
                <Link to="/">+1 208-345-4245</Link>
              </SupportContact>
            </td>
          </tr>
        </tbody>
      </ContactTable>
      <Message>
        * Every email or phone call is managed by our friendly customer support
        agents, and they will reply as soon as possible.
      </Message>
    </ContactUsContainer>
  );
};

export default ContactUs;
