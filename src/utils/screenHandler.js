import React from "react";
import useNavigation from "../hooks/useNavigation";
import HomeScreen from "../components/HomeScreen";
import ThemeScreen from "../components/ThemeScreen";

const useScreenHandlers = () => {
  /* Deconstructs the screen state and navigateTo function from useNavigation */
  const { screen, navigateTo } = useNavigation();

  const renderScreen = () => {
    switch (screen.name) {
      case "home":
        return <HomeScreen navigateTo={navigateTo} />;
      case "theme":
        return (
          <ThemeScreen
            navigateTo={navigateTo}
            themeName={screen.themeName}
            questionId={screen.name}
          />
        );
      default:
        return <HomeScreen navigateTo={navigateTo} />;
    }
  };

  return { renderScreen };
};

export default useScreenHandlers;
