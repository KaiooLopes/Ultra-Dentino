import MultiPagesNav from "../../components/MultiPagesNav";
import {
  HowToDiv,
  RefundIntro,
  RefundIntroText,
  RefundIntroTextDiv,
  RefundIntroTitle,
  RefundPolicyContainer,
} from "./styles";
import ContactUs from "../../components/ContactUs";
import FooterTexts from "../RefundPolicy/components/FooterTexts";

const RefundPolicy = () => {
  return (
    <RefundPolicyContainer>
      <RefundIntro>
        <RefundIntroTitle>
          <b>UltraDentino</b> <br /> <small>Política de reembolso</small>
        </RefundIntroTitle>
        <RefundIntroTextDiv>
          <RefundIntroText>
            You have <b>60 days</b> after we ship your order to explore the
            benefits of the product and draw your own conclusions. Hopefully,
            you'll become one of the many customers who contact us to share the
            joy of their experience with us.
          </RefundIntroText>
          <RefundIntroText>
            BEFORE you request a refund, please make sure you've given the
            product enough time to work for you. We usually advise all our
            customers to take some time with the supplements in order for them
            to prove their effect on the organism before reaching a conclusion.
            Yet, if you are not satisfied with your investment, you can easily
            ask for your money back!
          </RefundIntroText>
        </RefundIntroTextDiv>
        <HowToDiv>
          <RefundIntroTitle>
            This is our short how-to-easily-refund list for the steps you must
            follow:
          </RefundIntroTitle>
          <RefundIntroText>
            <b>1.</b> Make sure you are still in the 60-days period that follows
            the day the order has been shipped to you. You can find the date on
            the package or in your inbox in the shipment confirmation email.
          </RefundIntroText>
          <RefundIntroText>
            <b>2. </b>Send an email to our support team
            contact@prodentim-product.com. Please add "Refund Request" in the
            subject line of your email to ensure your refund request gets
            priority.
          </RefundIntroText>
          <RefundIntroText>
            <b>3. </b>Send all the bottles back to us at the below address. It
            doesn’t matter if the bottles are opened or not. Insert a note with
            your full name, email, and order id (optional) so your order can be
            located and processed with priority.
          </RefundIntroText>
          <RefundIntroText>
            <b>285 Northeast Ave, Tallmadge, OH 44278, United States.</b>
          </RefundIntroText>
        </HowToDiv>
        <RefundIntroText>
          Be patient, we will process your refund in no time after we get your
          package... and, rest assured, we will send you an email to let you
          know it has been done. It may take a while for your refund to appear
          on your credit card statement, depending on which bank you use or
          credit card company. The processing time is between 5 and 10 days.
        </RefundIntroText>
        <ContactUs />
      </RefundIntro>
      <MultiPagesNav />
      <FooterTexts />
    </RefundPolicyContainer>
  );
};

export default RefundPolicy;
