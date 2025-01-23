import { useEffect, useState } from "react";

function useQuestions(theme) {
  //Set to empty array before api is called.
  const [questions, setQuestions] = useState(null);
  // State to hold the questions array with irrelevant themes filtered.
  const [filteredQuestions, setFilteredQuestions] = useState(null);

  useEffect(() => {
    if (!questions) {
      fetch(
        "https://raw.githubusercontent.com/heathornJ/campfirequestions/main/questions.json"
      )
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, []);

  //Once questions fetched, filters the array of questions
  useEffect(() => {
    if (questions) {
      // Filters questions from the array by checking the question's theme matches the current selected theme.
      const filtered = questions.filter((q) => q.theme === theme.key);
      setFilteredQuestions(filtered);
      console.log(filteredQuestions);
    }
  }, [questions]);

  return { questions, filteredQuestions };
}

export default useQuestions;
