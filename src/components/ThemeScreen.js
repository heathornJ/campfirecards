import React, { useEffect, useState } from "react";
import Deck from "./Deck";

function ThemeScreen({ themeName, navigateTo }) {
  //Set to empty array before api is called.
  const [questions, setQuestions] = useState(null);

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

  //**TODO** Set filters to match chosen theme - This will match the key in fetched array
  //Once questions fetched, filters the array of questions
  useEffect(() => {
    if (questions) {
      const filtered = questions.filter((q) => q.userId === 1);
      setFilteredQuestions(filtered);
      console.log(filteredQuestions);
    }
  }, [questions]);

  //console.log(questions);
  return (
    <div className="main-container">
      <h1>{themeName}</h1>
      <button onClick={() => navigateTo("home")}>Home</button>
      <Deck theme={themeName} questions={questions} />
    </div>
  );
}

export default ThemeScreen;
