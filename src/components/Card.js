import React, { useEffect, useState } from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions, theme, reset }) {
  // State for checking if card toggled
  const [toggledCard, setToggledCard] = useState(false);
  // State for applying animation
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
      setAnimate determines the animation to play: Out if false, In if true.
      When clicked, set false, applying the out animation.
      Allow anim to finish with setTimeout.
      setToggledCard renders the new card face, setAnimate true applies the In anim. 
      In anim plays.
    */
    setAnimate(false);
    setTimeout(() => setToggledCard((prev) => !prev), 500);
    setTimeout(() => setAnimate(true), 500);
  };

  if (!toggledCard) {
    return (
      <div
        className={`card-face-down ${
          animate
            ? "animate__animated animate__flipInY"
            : "animate__animated animate__flipOutY"
        }`}
        onClick={handleCardClick}
      ></div>
    );
  }

  return (
    <div
      className={`card ${theme.color} ${
        animate
          ? "animate__animated animate__flipInY"
          : "animate__animated animate__flipOutY"
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
