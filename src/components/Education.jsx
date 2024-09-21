import React, { useEffect } from "react";
import "./css/education.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Education = () => {
  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      institution: " Bunts Sangha S M Shetty College",
      date: "2021- 2024",
      description:
        "Studied core Computer Science courses such as Algorithms, Data Structures, and Software Development.",
    },
    {
      title: "  Higher Secondary Certificate (HSC)",
      institution: "IDUBS Junior College",
      date: "2020-2021",
      description:
        "Completed my Higher Secondary Education with a focus on Science, securing a strong foundation in subjects like Physics, Chemistry, and Mathematics, along with Computer Science.'",
    },
    {
      title: " Secondary School Certificate (SSC)",
      institution: "Saraswati English High School",
      date: "2020-2021",
      description:
        "Completed my Higher Secondary Education with a focus on Science, securing a strong foundation in subjects like Physics, Chemistry, and Mathematics, along with Computer Science.'",
    }
  ];
  const certification = [
    {
      title: "React Developer Certification",
      institution: "Udemy",
      date: "2024",
      description:
        "Completed an advanced course on React.js and modern JavaScript libraries.",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      institution: "freeCodeCamp",
      date: "2023",
      description:
        "Certification for solving a wide range of algorithmic challenges in JavaScript.",
    },
    {
      title: "Amozon Web Service ",
      institution: "Magic Bus India",
      date: "september - November / 2024 ",
      description:
        "Earned the AWS Certified Solutions Architect – Associate credential, demonstrating a strong understanding of designing, deploying, and managing applications on the AWS cloud platform.",
    }
  ];
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="education" id="education-page">
      <div className="education-container">
        <div className="education-col">
          <h2>Education</h2>
          <div className="content" >
            {education.map((item, index) => {
              return (
                <div className="education-box" key={index} data-aos="fade-down">
                  <div className="round"></div>
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.date}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="education-col">
          <h2>Certificate</h2>
          <div className="content">
            {certification.map((item, index) => {
              return (
                <div className="education-box" key={index} data-aos="fade-down">
                    <div className="round"></div>
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.date}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
