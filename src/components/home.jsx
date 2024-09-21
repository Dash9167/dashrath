import "./home.css";
import img1 from "./assets/dash1.jpg";

import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from "aos";
// import Typing from "./typinf";

const Home = () => {
  useEffect(()=>{
    Aos.init({
      once:true,
      duration:2000
    });
  })
  return (
    <div className="home " id="home-page">
      <div className="home-container">
        <div className="right-home" data-aos="fade-down">
          <h1> Hi, I'am Dashrath</h1>
          <p>
            I am passionate Frontend Developer
             Skilled in React And NodeJs.
          </p>
          <h3>Reach out if you'd like to learn more</h3>
          <a href="#contact-page">
            <button>Connect Me <i className="fa-solid fa-circle-arrow-right"></i></button>
          </a>
        </div>
        <div className="left-home">
          <div className="left-img">
            <img src={img1} alt="dash" data-aos="zoom-in-left"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
