import React, { useEffect } from "react";

import "./css/projects.css";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import Card from "./card";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="projects" id="projects-page">
      <h1>My Works</h1>
      <div className="project-content">
        <Card
          img={p1}
          title="Travel Website"
          language={["HTML", "CSS3", "Javascript", "React"]}
          hyperlink=" https://ddjpmx.csb.app/"
          code="https://github.com/Dash9167/travel-website-react-js"
          desc="travel website is to check the price of the place and desc,user want to visit "
        />
        <Card
          img={p6}
          title="Word Wave"
          
          language={["HTML", "CSS3", "Javascript", "React"]}
          hyperlink="https://c2mg2w.csb.app/"
          code="https://github.com/Dash9167/WordWave"
          desc="In this web application if the user want tranform thier text and count the text"
        />
        <Card
          img={p2}
          title="Eatmore Website"

          language={["HTML", "CSS3", "Javascript", "React"]}
          hyperlink="https://github.com/Dash9167/EatMore-E-commerce-website"
          code="https://github.com/Dash9167/EatMore-E-commerce-website"
          desc="Eatmore ice cream is the front-end web application "
        />
        <Card
          img={p3}
          title="Taza Khabar Website"

          language={["HTML", "CSS3", "Javascript", "React", "API"]}
          hyperlink="https://github.com/Dash9167/taza-Khabar-news-"
          code="https://github.com/Dash9167/taza-Khabar-news-"
          desc="Its New App desined to get shortlist the category of news you wanr read"
        />
        <Card
          img={p4}
          title="7up 7Down Dice Game"

          language={["HTML", "CSS3", "Javascript", "React"]}
          hyperlink="https://4883fw.csb.app/"
          code="https://github.com/Dash9167/7-up-7-Down-dice-Game-React.js-"
          desc="Roll the two dice.
          If the sum is 7 or more, it’s 7 Up.
          If the sum is 6 or less, it’s 7 Down.
          Players who guessed correctly earn a point or win a
          round."
        />
        <Card
          title="Clinic Management System"
        
          img={p5}
          language={["HTML", "CSS3", "Javascript", "Java", "Jsp", "Servlet"]}
          hyperlink="https://github.com/Dash9167/Clinic-Management-System"
          code="https://github.com/Dash9167/Clinic-Management-System"
          desc="Is a java web application is designed to help the daily operation of the clinic"
        />
      </div>
    </div>
  );
};
export default Projects;
