import Deck from "./Deck";
import useQuestions from "../hooks/useQuestions";

function ThemeScreen({ theme, navigateTo }) {
  const { filteredQuestions } = useQuestions(theme);

  return (
    <div className="main-container">
      <h1>{theme.displayText}</h1>
      <div className="home-button">
        <button onClick={() => navigateTo("home")}>Home</button>
      </div>
      <Deck theme={theme} questions={filteredQuestions} />
    </div>
  );
}

export default ThemeScreen;
