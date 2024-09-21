import React, { useState,useEffect } from "react";
import "./css/about.css";
import d2 from "./assets/dash2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Skill from "./skill";
import Frameworks from "./framework";
import Database from "./database";

const About = () => {
  const [active, setactive] = useState(1);

  const activate = (index) => {
    setactive(index);
  };
  useEffect(() => {
    AOS.init({
   
      
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="about" id="about-page">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-right " data-aos="fade-top">
          <h1>Dashrath Yadav</h1>
          <p>
            Hello! I'm Dashrath Yadav, a passionate and motivated Frontend
            Developer and Java developer with a strong foundation in web
            development.I have worked on several projects that demonstrate my
            ability to build efficient and creative solutions. Through these
            projects, I've developed a solid understanding of both front-end and
            back-end technologies, as well as problem-solving skills.
          </p>
          <div className="about-icon" data-aos="flip-up">
            <a href="/"><i className="fa-solid fa-location-dot"></i>Mumbai, Maharashtra</a>
          </div>
          <div className="about-icon" data-aos="flip-up">
       <a href="/">     <i className="fa-solid fa-envelope"></i>dashrathy2003@gmail.com</a>
          </div>
          <div className="about-icon" data-aos="flip-up">
           <a href="/"> <i className="fa-solid fa-phone"></i>91+ 9167583031</a>
          </div>
          <div className="about-icon" data-aos="flip-up">
         <a href="https://www.linkedin.com/in/dashrath-yadav-432a0124a/"> <i className="fa-brands fa-linkedin-in"></i>linkedin</a>
          </div>
        </div>
        <div className="about-img">
          <img src={d2} alt="" data-aos="zoom-in"/>
        </div>
        <div className="about-left">
          <h1 data-aos="fade-top">My Skills</h1>
          <p data-aos="fade-top">
            As a Frontend developer and web enthusiast, I have acquired a
            diverse set of skills that enable me to build both front-end and
            back-end applications. Here are the key technologies and tools I’m
            proficient in:
          </p>
          <div className="menu-about " >
            <ul>
              <li
                className={active === 1 ? "active" : ""}
                onClick={() => activate(1)}
              >
                Language
              </li>
              <li
                className={active === 2 ? "active" : ""}
                onClick={() => activate(2)}
              >
                Frameworks
              </li>
              <li
                className={active === 3 ? "active" : ""}
                onClick={() => activate(3)}
              >
                Database
              </li>
            </ul>
          </div>
          <div className="menu-about-content" data-aos="fade-bottom">
            {active === 1 ? <Skill /> : ""}
            {active === 2 ? <Frameworks /> : ""}
            {active === 3 ? <Database /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
