
import React, { useRef } from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mtrh4mp", "template_5ywyveq", form.current, {
        publicKey: "KFL1i7ABWaIKy3vRZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <span className="desc">
        Please fill the form below to discuss any work oppertunities.
      </span>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="yourName" placeholder="Your name " name="from_name"/>
        <input type="email" className="email" placeholder="Your Email" name="your_email"/>
        <textarea  name="message"  rows="5"  className="msg" placeholder="Your Message"  />
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
