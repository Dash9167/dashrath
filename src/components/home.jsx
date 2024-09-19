import "./home.css";
import img1 from "./assets/dash1.jpg";
// import Typing from "./typinf";

const Home = () => {
  return (
    <div className="home " id="home-page">
      <div className="home-container">
        <div className="right-home">
          <h1> Hi, I'am Dashrath</h1>
          <p>
            I am passionate Frontend Developer
             Skilled in React And NodeJs.
          </p>
          <h3>Reach out if you'd like to learn more</h3>
          <a href="#contact-page">
            <button>Connect Me</button>
          </a>
        </div>
        <div className="left-home">
          <div className="left-img">
            <img src={img1} alt="dash" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
