import React, { useEffect, useState } from "react";
import Card from "./Card";

// Receives theme and questions from ThemeScreen.
function Deck({ theme, questions }) {
  // State to keep a track of the current random questions.
  const [selectedQuestions, setSelectedQuestions] = useState(["", ""]);

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

  // TEMP - Reports when selectedQuestions has been updated - REMOVE WHEN COMPLETE
  /*
  useEffect(() => {
    console.log("updated selectedQuestions: ", selectedQuestions);
  }, [selectedQuestions]);
 */

  return (
    <div>
      <button onClick={drawCards}>I am the deck of {theme.displayText}</button>
      {/* TODO: Remove .title when json file is ready */}
      <Card questions={selectedQuestions[0].title} />
      <Card questions={selectedQuestions[1].title} />
    </div>
  );
}

export default Deck;
