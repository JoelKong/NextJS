import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const FeedbackInputRef = useRef();

  function submitFormHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = FeedbackInputRef.current.value;
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={FeedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
