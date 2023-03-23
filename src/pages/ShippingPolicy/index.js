import MultiPagesNav from "../../components/MultiPagesNav";
import { ShippingBox, ShippingPolicyContainer } from "./styles";
import FooterTexts from "../../components/FooterTexts";
import ContactUs from "../../components/ContactUs";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <ShippingPolicyContainer>
      <ShippingBox>
        <h1>ShippingPolicy</h1>
        <h2>Política de envio</h2>
      </ShippingBox>
      <ShippingBox>
        <p>
          When you decide to purchase ProDentim or related products, your order
          will be automatically shipped after you've filled in the order form
          and your payment is confirmed.
        </p>
        <p>
          In no more than 60 hours, you will receive an email with your shipping
          tracking ID and a personalized link that allows you to check your
          shipment anytime you like.
        </p>
        <p>
          After receiving this email, you can rest assured, as your order is on
          its way to you and will be delivered to the address you have provided
          us as soon as possible, as our trusted shipping partner guarantees.
        </p>
        <p>
          We'll make sure that you only receive premium quality products, as
          your health and satisfaction with our supplements is our goal and
          business identity. If, at any time, you have any questions, simply let
          us know by writing us an email to this address
          <Link to="/"> contact@prodentim-product.com.</Link>
        </p>
      </ShippingBox>
      <ShippingBox>
        <h2>When can i recieve my order?</h2>
        <p>
          We will deliver your ordered products wherever you want. You can ask
          for them at home or at work, anywhere you have a physical address.
        </p>
        <h2>Can the billing address be different than the shipping address?</h2>
        <p>
          Yes. Simply choose a different billing address from your order form
          and provide us with both addresses.
        </p>
        <h2>How long will my order take to arrive?</h2>
        <p>
          According to most of our customers, domestic packages arrive within
          5-7 working days after being ordered.
        </p>
        <h2>How much do I pay for the delivery service?</h2>
        <p>
          Nothing at all! The delivery service is on our side, as a sign of
          appreciation and trust you will be happy with your order.
        </p>
        <h2>Can I track my order / check the status of my order?</h2>
        <p>
          Yes, you can. In maximum 60 hours after you order, all working days of
          the week, you will receive an email with your shipping tracking ID and
          a link. Click on that link to check on the status of your order
          anytime you want.
        </p>
        <h2>
          I accidentally placed my order with an incorrect shipping address.
          What should I do?
        </h2>
        <p>
          First of all, you shouldn't worry. If you realize you have accidently
          ordered to an incorrect shipping address, write us an email as soon as
          possible, in order for us to make the proper changes, so that you can
          receive and enjoy the ordered products. You can find us any day of the
          week online, at
          <Link to="/"> contact@prodentim-product.com.</Link>
        </p>
        <h2>
          I need more information about the product or the shipping process.
          Whom should I contact?
        </h2>
        <p>
          We stand right by our customers every step of the way. So, if you have
          questions regarding the product, the order or the shipping process,
          we're here to help. Just write us an email, any day of the week at
          <Link to="/"> contact@prodentim-product.com.</Link>
        </p>
        <ContactUs />
      </ShippingBox>
      <MultiPagesNav />
      <FooterTexts />
    </ShippingPolicyContainer>
  );
};

export default ShippingPolicy;
