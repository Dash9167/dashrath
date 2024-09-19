import React from "react";
import Skills from "./skills";
const Skill = () => {
  return (
    <div className="skills">
      <Skills language="HTML" percent={95} icon="fa-brands fa-html5"/>
      <Skills language="CSS" percent={95} icon="fa-brands fa-css3-alt"/>
      <Skills language="JavaScript" percent={60} icon="fa-brands fa-js"/>

      <Skills language="Java" percent={65} icon="fa-brands fa-java"/>
    </div>
   
  );
};
export default Skill;
