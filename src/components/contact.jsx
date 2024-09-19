import React, { useEffect, useState } from "react";
import "./css/contact.css";
import dev from "./assets/d1.png";
import Contact2 from "./contact2";

const Contact = () => {
  const [visible,setvisible]=useState(false);

const sendvisible=(data)=>{
  setvisible(data);
}
useEffect(()=>{
  if(visible){
    const timer=setTimeout(() => {
      setvisible(false)
    }, 2000);
    return ()=>clearTimeout(timer)
  }
  
},[visible])
  return (
    <div className="contact" id="contact-page">
      <h2>Contact Me</h2>
     {
       <div  className={visible?" message":"messge hide"} >
      
         
           <h3 > Messgae Sent Successfully.</h3>
         
       </div>
      
     }
      <div className="contact-container">
        <div className="contact-1">
          <h2>Get In Touch</h2>
          <div className="contact-img">
            <img src={dev} alt="" />
          </div>
          <div className="socail">
            <h3>Connect With Us</h3>
            <div className="socail-link">
             <a href="https://www.instagram.com/hritikx__45?igsh=MWJ5aHN1ZTFuczdlZA=="> <i className="fa-brands fa-instagram"></i></a>
              <a href="https://github.com/Dash9167"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.facebook.com/hritik.yadav.3154284?mibextid=ZbWKwL">  <i className="fa-brands fa-square-facebook"></i></a>
          <a href="https://wa.me/9167583031?text=Hello%20How%20are%20you">    <i className="fa-brands fa-square-whatsapp"></i></a>
      
            </div>
          </div>
        </div>
        <div className="contact-2">
          <Contact2 data={sendvisible}/>
        </div>
      </div>
    </div>
  );
};
export default Contact;
