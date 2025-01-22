import React, { useEffect, useState } from "react";
import Deck from "./Deck";

function ThemeScreen({ theme, navigateTo }) {
  //Set to empty array before api is called.
  const [questions, setQuestions] = useState();

  //**TODO** Swap jsonplaceholder out for link to relevant questions
  // Checks if the questions state is empty and then fetches the data and sets the state if it is.
  useEffect(() => {
    if (!questions) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, [questions]);

  //console.log(questions);
  return (
    <div className="main-container">
      <h1>{theme}</h1>
      <button onClick={() => navigateTo("home")}>Home</button>
      <Deck theme={theme} questions={questions} />
    </div>
  );
}

export default ThemeScreen;
