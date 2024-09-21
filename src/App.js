// src/App.js
import React from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/contact";
 import Education from "./components/Education";
import  Blank  from "./components/blank";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Blank/>
      <About/>
      <Projects />
     <Education />
      <Contact />
    </>
  );
};

export default App;
