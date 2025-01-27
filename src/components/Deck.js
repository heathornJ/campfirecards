import React, { useState } from "react";
import Card from "./Card";

// Receives theme and questions from ThemeScreen.
function Deck({ theme, questions }) {
  // State to keep a track of the current random questions.
  const [selectedQuestions, setSelectedQuestions] = useState(["", ""]);
  // State to track resetkey for setting Card to facedown.
  const [resetKey, setResetKey] = useState(0);

  // Generates 2 random numbers to select an index from the questions array. Adds these questions to the array.
  const handleDrawCards = () => {
    // Increments resetKey causing update on Card
    setResetKey((prevKey) => prevKey + 1);

    const maxRange = questions.length;
    let index1 = randomNumberInRange(maxRange);
    let index2 = randomNumberInRange(maxRange);

    while (index1 === index2) {
      index2 = randomNumberInRange(maxRange);
    }

    // Sets the selectedQuestions state to contain the 2 random questions
    setSelectedQuestions([questions[index1], questions[index2]]);
  };

  // generates a random number between 0 and the length of a given array
  const randomNumberInRange = (maxRange) => {
    return Math.floor(Math.random() * maxRange);
  };

  // TEMP - Reports when selectedQuestions has been updated - REMOVE WHEN COMPLETE
  /*
  useEffect(() => {
    console.log("updated selectedQuestions: ", selectedQuestions);
  }, [selectedQuestions]);
 */

  return (
    <div className="deck-card-container">
      <div
        className="deck animate__animated animate__fadeInDown"
        onClick={handleDrawCards}
      ></div>
      <div className="cards-container">
        <Card questions={selectedQuestions[0]} theme={theme} reset={resetKey} />
        <Card questions={selectedQuestions[1]} theme={theme} reset={resetKey} />
      </div>
    </div>
  );
}

export default Deck;
