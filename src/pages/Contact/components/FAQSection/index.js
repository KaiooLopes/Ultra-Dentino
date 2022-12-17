import { FAQSectionContainer, IntroFaq, TitleFAQ, Questions } from "./styles";

import FAQImage from "./images/FAQ.png";
import QuestionAndAnswer from "./components/QuestionsAndAnswer";

const FAQSection = () => {
  return (
    <>
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
      <Questions>
        <QuestionAndAnswer
          question="How do I know if ProDentim is right for me?"
          icon="fa-sharp fa-solid fa-book"
          answer="Scientists have realized that the real root cause of gum disease
          is the lack of good bacteria. In order to rebuild your teeth and
          gums, you need to repopulate your mouth with good bacteria and
          provide a healthy environment for the strains to grow in.
          ProDentim is a doctor-formulated mix that gathers 5 scientifically
          proven, extra-strong strains, combining a total of 3,5 Billion
          good bacteria into one revolutionary soft tablet that targets the
          root cause of tooth and gum decay."
        />
        <QuestionAndAnswer
          question="How will the charge appear on my credit card or bank statement?"
          icon="fa-solid fa-question"
          answer="Your credit card statement will show a charge to CLKBANK*1 302
          754 3446. Questions? Contact us by CLICKING HERE."
        />
        <QuestionAndAnswer
          question="Is ProDentim safe? Does it have any side effects or does it
          interact with other medication?"
          icon="fa-solid fa-square-check"
          answer="ProDentim Pro has been designed for all ages and medical
          conditions. All of the ingredients inside of ProDentim have been
          proven to be safe in clinical trials, and are constantly tested
          for purity and to ensure against toxins and contaminants.
          Moreover, ProDentim is manufactured in an FDA-approved facility,
          under sterile, strict and precise standards."
        />
        <QuestionAndAnswer
          question="How many bottles should I order to see results?"
          icon="fa-solid fa-circle-question"
          answer="Some patients may experience improvement faster, while others
          might take longer. Results might vary from individual to
          individual. Just to have an idea, tests have indicated that
          supplements take around 9-12 weeks to show results. However,
          this is not a rule, some people see results faster while others
          need more time. I recommend you get at least the 3 bottles
          package to test it properly."
        />
        <QuestionAndAnswer
          question="What’s the best way to take ProDentim?"
          icon="fa-solid fa-question"
          answer="We recommend you let one soft tablet melt into your mouth every
          morning for a powerful, deep toxin cleanse that clears your
          entire body, gums and teeth."
        />

        <QuestionAndAnswer
          question="Am I enrolled to a subscription?"
          icon="fa-solid fa-comments-dollar"
          answer="You can rest assured that this is a one-time payment. There
          won’t be any recurring shipments or charges to your card. Should
          you wish to purchase more bottles later, you can do so by
          placing another order on our website."
        />
        <QuestionAndAnswer
          question="Am I enrolled to a subscription?"
          icon="fa-solid fa-comments-dollar"
          answer="You can rest assured that this is a one-time payment. There
          won’t be any recurring shipments or charges to your card. Should
          you wish to purchase more bottles later, you can do so by
          placing another order on our website."
        />
        <QuestionAndAnswer
          question=" What if ProDentim doesn’t work for me? How do I get a refund?"
          icon="fa-solid fa-clock"
          answer="The more results we see, the stronger we believe ProDentim has
          the power to completely transform your gums and teeth. It’s
          true, though, that nothing works for 100% of the people who try
          it as each body works in its own way. That’s why every bottle of
          ProDentim comes with an ironclad 60-day money back guarantee.
          If, for any reason, you aren’t fully satisfied with the results,
          simply return all purchased bottles to the address of our
          warehouse and upon their arrival, we will issue a full refund.
          No questions asked. Use this link to get your refund started:
          Refunds"
        />
        <QuestionAndAnswer
          question="How will ProDentim be shipped to me and how quickly?"
          icon="fa-sharp fa-solid fa-van-shuttle"
          answer="Your order will be shipped the next business day after your
          confirmation. Your shipment should arrive within 5-7 business
          days if you are based in the US, or 10-15 business days if you
          are outside the US. Please allow some extra time for delays in
          shipping and customs clearance due to current events.Check this
          link for more details about our shipping policy: Shipping"
        />
        <QuestionAndAnswer
          question="What are the ingredients?"
          icon="fa-solid fa-prescription-bottle"
          answer="You may find the label with all the ingredients and their
          dosages at the following link: References"
        />
        <QuestionAndAnswer
          question="Is the product approved by FDA?"
          icon="fa-solid fa-file-circle-check"
          answer="The FDA is not authorized to review any dietary supplements.
          ProDentim is made in a facility that is FDA accredited and tests
          the products regularly for safety and quality."
        />
        <QuestionAndAnswer
          question="Do I have to take this product forever?"
          icon="fa-solid fa-clock"
          answer="Certainly not. 1, 3 or 6 bottles, depending on the severity of
          your condition, are enough to see and enjoy results well into
          old age. Since we cannot estimate how affected your body is, we
          strongly recommend the 6 bottle package just to make sure you
          get the full benefits of our formula for as long as possible."
        ></QuestionAndAnswer>
        <QuestionAndAnswer
          question="Do you sell your product in stores or other websites?"
          icon="fa-solid fa-cart-shopping"
          answer="Our product has been so successful that many have tried to copy
          it and sell it on other websites. But please be advised as those
          websites might not be legit and the product you buy might not be
          the product you seek. ProDentim can be found only on this page
          and it is not available for purchase anywhere else."
        ></QuestionAndAnswer>
      </Questions>
    </>
  );
};

export default FAQSection;
