import {
  HelpAndSupportContainer,
  Attendance,
  Title,
  SendFeedback,
} from "./styles";

const HelpAndSupport = () => {
  return (
    <HelpAndSupportContainer>
      <Title>
        <h1>
          If you haven't found the answer you need above, our customer support
          agents are more than happy to personally assist you, as follows:
        </h1>
      </Title>
      <Attendance>
        <p>For Order Support, please contact ClickBank HERE.</p>
        <p>
          For product support contact the vendor anytime using the contact form
          below or call us at +1 (302) 754-3446 from Monday to Sunday 10 AM - 1
          AM EST.
        </p>
      </Attendance>
      <SendFeedback>
        <h2>Help & Support</h2>
        <form>
          <div>
            <i class="fa-regular fa-envelope"></i>
            <input type="text" />
          </div>
          <div>
            <i class="fa-solid fa-question"></i>
            <input type="text" />
          </div>
          <div>
            <textarea required />
          </div>
          <div>
            <p>I'm writing you to...</p> <select />
          </div>
          <div>
            <p>I'm writing you to...</p> <select />
          </div>
          <div>
            <p>Product (auto-filled)</p> <select />
          </div>
          <div>
            <button>Send Feedback</button>
          </div>
        </form>
      </SendFeedback>
    </HelpAndSupportContainer>
  );
};

export default HelpAndSupport;
