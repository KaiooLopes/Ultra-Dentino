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
                <a href="#">contact@prodentim-product.com</a>
              </SupportContact>
            </td>
          </tr>
          <tr>
            <td>
              <SupportName>
                <p> Product Phone Support</p>
              </SupportName>
              <SupportContact>
                <a href="#">+1 (302) 754-3446Mon</a>
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
                <a href="#">https://www.clkbank.com/</a>
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
                <a href="#">1-800-390-6035</a>
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
                <a href="#">+1 208-345-4245</a>
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
