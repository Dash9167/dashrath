import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact2 = ({data}) => {
    const[visible,setvisible]=useState(false);
    const show=()=>{
        
            setvisible(true)
         
           data(visible)
    }
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_qx8eszn', 'template_nrmhu3k', form.current, {
          publicKey: 'Pjy0Prq7UnX9eeyCS',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            show();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <>
      <h2>Get In Touch</h2>
     <div className="contact-form">
        <form onSubmit={sendEmail} ref={form}>
        <label htmlFor="">Name</label>
        <input type="text" name="user_name" id=""  placeholder="Name"/>
        <label htmlFor="">Email</label>
        <input type="email" name="user_email" id=""  placeholder="Email" />
        <label htmlFor="">Message</label>
        <textarea name="message" id="" placeholder="Message"></textarea>
        <button type="submit" >Send</button>
        </form>

     </div>
    </>
  );
};
export default Contact2;
