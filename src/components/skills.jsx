import React from "react";

const Skills = ({language,percent,icon}) => {
  return (
    <div className="skills-set">
      <h3><i className={icon}></i> {language}  </h3>
      <div className="skilss-data">
        <div className="skill" style={{width:`${percent}%`}}>
          <b>{percent}%</b>
        </div>
      </div>
    </div>
  );
};
export default Skills;
