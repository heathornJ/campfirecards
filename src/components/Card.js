import React from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions, theme }) {
  if (!questions) return <div></div>;
  const capitalTheme = theme.displayText.toUpperCase();

  return (
    <div className={`card ${theme.color}`}>
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
