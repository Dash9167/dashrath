import React from "react";

const Card = ({ img, language, hyperlink, code ,desc}) => {
  return (
    <div className="cards-item">
      <img src={img} alt="" />
      <div className="card-content">
        <h3>Travel Website</h3>
        <div className="language-used">
          {language.map((lang, index) => (
            <ul key={index}>
              <li>{lang}</li>
            </ul>
          ))}
        </div>
        {language.map((lang, index) => (
          <div className="item" key={index}>
            <p>
             {desc}
            </p>
            <div className="cards-button">
              <a href={code} target="_blank"  rel="noopener noreferrer">
                <button>Code</button>
              </a>
              <a href={hyperlink} target="_blank"  rel="noopener noreferrer">
                <button>Live</button>
              </a>
            </div>
            <br/>
          </div>
         
        ))}
      </div>
    </div>
  );
};
export default Card;
