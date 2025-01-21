import React, { useEffect, useState } from "react";
import Deck from "./Deck";

function ThemeScreen({ theme, navigateTo }) {
  //Set to empty array before api is called.
  const [questions, setQuestions] = useState([
    "question 1",
    "question 2",
    "question 3",
    "question 4",
  ]);

  //**TODO** useEffect to capture questions from api call to go here and set the question state

  return (
    <div className="main-container">
      <h1>{theme}</h1>
      <button onClick={() => navigateTo("home")}>Home</button>
      <Deck theme={theme} questions={questions} />
    </div>
  );
}

export default ThemeScreen;
