import React from "react";

// Displays a random question, determined in Deck, as the button text
function Card(props) {
  return <button>{props.question}</button>;
}

export default Card;
