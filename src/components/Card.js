import React from "react";

// Displays a random question, determined in Deck, as the button text
function Card({ questions }) {
  if (!questions) return <div></div>;
  return (
    <button>
      {questions.question} <br />{" "}
      {questions.subQuestion[0] !== null ? questions.subQuestion[0] : ""} <br />
      {questions.subQuestion[1] !== null ? questions.subQuestion[1] : ""}
    </button>
  );
}

export default Card;
