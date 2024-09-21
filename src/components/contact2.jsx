import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact2 = ({ data }) => {

  useEffect(()=>{
    Aos.init({
once:true,
duration:1500
    });
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qx8eszn", "template_nrmhu3k", form.current, {
        publicKey: "Pjy0Prq7UnX9eeyCS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
         data(true)
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <h2>Get In Touch</h2>
      <div className="contact-form" data-aos="fade-down">
        <form onSubmit={sendEmail} ref={form}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="user_name"
            id=""
            placeholder="Name"
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Email"
            required
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
export default Contact2;
