import React, { useState } from "react";
import config from "../data/config.json";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const text = config.sections.alert;
  return (
    <div className="alert">
      <h3>{text.h3[0]}</h3>
      <p>
        {text.p[0]}
        <br />
        <br />
        {text.p[1]}
        <br />
        <br />
        {text.p[2]}
        <a href={config.sections.links.gitHub} target="_blank" rel="noreferrer">
          {text.p[3]}
        </a>
      </p>
      <h3>{text.h3[1]}</h3>
      <ul>
        <li>{text.li}</li>
      </ul>
      <button onClick={handleClose}>{text.button}</button>
    </div>
  );
};

export default Alert;
