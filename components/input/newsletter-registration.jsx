import classes from "./newsletter-registration.module.css";
import { useRef } from "react";

function NewsletterRegistration() {
  const emailInput = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>برای بروز بودن ثبت نام کنید</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="ایمیل"
            aria-label="Your email"
            ref={emailInput}
          />
          <button>ثبت نام</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
