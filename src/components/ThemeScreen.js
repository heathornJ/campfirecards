import Deck from "./Deck";
import useQuestions from "../hooks/useQuestions";

function ThemeScreen({ theme, navigateTo }) {
  const { filteredQuestions } = useQuestions(theme);

  return (
    <div className="main-container">
      <h1>{theme.displayText}</h1>
      <button onClick={() => navigateTo("home")}>Home</button>
      <Deck theme={theme} questions={filteredQuestions} />
    </div>
  );
}

export default ThemeScreen;
