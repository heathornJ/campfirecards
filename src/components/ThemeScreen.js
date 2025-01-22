import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import config from "../data/config.json";

function ThemeScreen({ theme, navigateTo }) {
  //Set to empty array before api is called.
  const [questions, setQuestions] = useState(null);
  // State to hold the questions array with irrelevant themes filtered.
  const [filteredQuestions, setFilteredQuestions] = useState(null);

  //**TODO** Swap jsonplaceholder out for link to relevant questions
  // Checks if the questions state is empty and then fetches the data and sets the state if it is.
  useEffect(() => {
    if (!questions) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, []);

  //Once questions fetched, filters the array of questions
  useEffect(() => {
    if (questions) {
      /* UNCOMMENT WHEN JSON READY // Filters questions from the array by checking the question's theme matches the current selected theme.
      const filtered = questions.filter(
        (q) => q.theme === theme.displayText
      ); */

      const filtered = questions.filter(
        (q) => q.userId === config.sections.themes.ref1
      );
      setFilteredQuestions(filtered);
      console.log(filteredQuestions);
    }
  }, [questions]);

  //console.log(questions);
  return (
    <div className="main-container">
      <h1>{theme.displayText}</h1>
      <button onClick={() => navigateTo("home")}>Home</button>
      <Deck theme={theme} questions={questions} />
    </div>
  );
}

export default ThemeScreen;
