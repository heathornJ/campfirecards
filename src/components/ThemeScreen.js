import Deck from "./Deck";
import useQuestions from "../hooks/useQuestions";
import config from "../data/config.json";

function ThemeScreen({ theme, navigateTo }) {
  const { filteredQuestions } = useQuestions(theme);
  const homeScreen = config.sections.screens.home;
  const buttonText = config.sections.themeScreen.buttonText;
  return (
    <div className="main-container">
      <h1>{theme.displayText}</h1>
      <div className="home-button">
        <button onClick={() => navigateTo(homeScreen)}>{buttonText}</button>
      </div>
      <Deck theme={theme} questions={filteredQuestions} />
    </div>
  );
}

export default ThemeScreen;
