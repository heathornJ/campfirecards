import React, { useEffect, useState } from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions, theme, reset }) {
  // State for checking if card toggled
  const [toggledCard, setToggledCard] = useState(false);
  // State for applying/removing animation
  const [animate, setAnimate] = useState(true);

  // Checks if resetKey state from Deck is change, sets toggledCard to false if so.
  useEffect(() => {
    setToggledCard(false);
  }, [reset]);

  if (!questions) return <div></div>;
  const capitalTheme = theme.displayText.toUpperCase();

  // Toggles faceup/facedown card view, removes/applies animation
  const handleCardClick = () => {
    /* 
      setAnimate and setTimeout work together here.
      setAnimate removes the animate__ classes.
      setTimeout, after 0 time, setAnimate true, re-applying
      the class and allowing the animation to play.
    */
    setAnimate(false);
    setTimeout(() => setAnimate(true), 0);
    setToggledCard((prev) => !prev);
  };

  if (!toggledCard) {
    return (
      <div
        className={`card-face-down ${
          animate ? "animate__animated animate__flipInY" : ""
        }`}
        onClick={handleCardClick}
      ></div>
    );
  }

  return (
    <div
      className={`card ${theme.color} ${
        animate ? "animate__animated animate__flipInY" : ""
      }`}
      onClick={handleCardClick}
    >
      <h2 className="card-theme">{capitalTheme}</h2>
      <div className="card-question-container">
        <p className="main-question">{questions.question}</p>
        {questions.subQuestion[0] !== "" ? (
          <p>{questions.subQuestion[0]}</p>
        ) : (
          ""
        )}
        {questions.subQuestion[1] !== undefined ? (
          <p>{questions.subQuestion[1]}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
