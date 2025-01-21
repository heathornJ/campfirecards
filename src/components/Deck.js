import React, { useState } from "react";
import Card from "./Card";

// Receives theme and questions from ThemeScreen.
function Deck({ theme, questions }) {
  // State to keep a track of the current random questions.
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Generates 2 random numbers to select an index from the questions array. Adds these questions to the array.
  const drawCards = () => {
    const maxRange = questions.length;
    let index1 = Math.floor(Math.random() * maxRange);
    let index2 = Math.floor(Math.random() * maxRange);

    while (index1 === index2) {
      index2 = Math.floor(Math.random() * maxRange);
    }
    // Sets the selectedQuestions state to contain the 2 random questions
    setSelectedQuestions([questions[index1], questions[index2]]);
  };
  return (
    <div>
      <button onClick={drawCards}>I am the deck of {theme}</button>
      <Card question={selectedQuestions[0]} />
      <Card question={selectedQuestions[1]} />
    </div>
  );
}

export default Deck;
