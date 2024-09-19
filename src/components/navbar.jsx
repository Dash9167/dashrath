import React, { useState } from "react";
import "../components/navbar.css";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const activeclick = () => {
    setactive(!active);
    
  };
  return (
    <div className="nav">
      <div className="logo">
        Dash<span>rath</span>
      </div>
      <div className="menu">
        <ul className={active?"":"active"}>
          <i className="fa-solid fa-circle-xmark " onClick={activeclick}></i>
          <li ><a href="#home-page" onClick={activeclick}>Home</a></li>
          <li><a href="#about-page" onClick={activeclick}>About</a></li>
          <li><a href="#education-page" onClick={activeclick}>Education</a></li>
          <li><a href="#projects-page" onClick={activeclick}>Projects</a></li>
          <li><a href="#contact-page" onClick={activeclick}>Contact</a></li>
        </ul>
      </div>
      <i className="fa-solid fa-bars" onClick={activeclick}></i>
    </div>
  );
};

export default Navbar;
