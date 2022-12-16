import MultiPagesNav from "../../components/MultiPagesNav";
import {
  RefundIntro,
  RefundIntroText,
  RefundIntroTextDiv,
  RefundIntroTitle,
  RefundPolicyContainer,
} from "./styles";

const RefundPolicy = () => {
  return (
    <RefundPolicyContainer>
      <RefundIntro>
        <RefundIntroTitle>
          <b>UltraDentino</b> <br /> <small>Política de envío</small>
        </RefundIntroTitle>
        <RefundIntroTextDiv>
          <RefundIntroText>
            When you decide to purchase ProDentim or related products, your
            order will be automatically shipped after you've filled in the order
            form and your payment is confirmed.
          </RefundIntroText>
          <RefundIntroText>
            In no more than 60 hours, you will receive an email with your
            shipping tracking ID and a personalized link that allows you to
            check your shipment anytime you like.
          </RefundIntroText>
          <RefundIntroText>
            After receiving this email, you can rest assured, as your order is
            on its way to you and will be delivered to the address you have
            provided us as soon as possible, as our trusted shipping partner
            guarantees.
          </RefundIntroText>
          <RefundIntroText>
            We'll make sure that you only receive premium quality products, as
            your health and satisfaction with our supplements is our goal and
            business identity. If, at any time, you have any questions, simply
            let us know by writing us an email to this address
            <b>
              <a> contact@prodentim-product.com.</a>
            </b>
          </RefundIntroText>
        </RefundIntroTextDiv>
      </RefundIntro>
      <MultiPagesNav />
    </RefundPolicyContainer>
  );
};

export default RefundPolicy;
