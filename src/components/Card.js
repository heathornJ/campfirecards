import React, { useEffect, useState } from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions, theme, reset }) {
  const [toggledCard, setToggledCard] = useState(false);

  // Checks if resetKey state from Deck is change, sets toggledCard to false if so.
  useEffect(() => {
    setToggledCard(false);
  }, [reset]);

  if (!questions) return <div></div>;
  const capitalTheme = theme.displayText.toUpperCase();

  const handleCardClick = () => setToggledCard((prev) => !prev);

  if (!toggledCard) {
    return <div className="card-face-down" onClick={handleCardClick}></div>;
  }

  return (
    <div className={`card ${theme.color}`} onClick={handleCardClick}>
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
