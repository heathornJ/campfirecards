import React from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions }) {
  if (!questions) return <div></div>;
  return (
    <button className="card">
      <div className="card-question-container">
        {questions.question} <br /> <br />
        {questions.subQuestion[0] !== "" ? questions.subQuestion[0] : ""}
        <br />
        {questions.subQuestion[1] !== undefined ? questions.subQuestion[1] : ""}
      </div>
    </button>
  );
}

export default Card;
