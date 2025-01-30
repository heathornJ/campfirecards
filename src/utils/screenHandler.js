import React from "react";
import useNavigation from "../hooks/useNavigation";
import HomeScreen from "../components/HomeScreen";
import ThemeScreen from "../components/ThemeScreen";
import config from "../data/config.json";

const useScreenHandlers = () => {
  /* Deconstructs the screen state and navigateTo function from useNavigation */
  const { screen, navigateTo } = useNavigation();
  const screenName = config.sections.screens;

  const renderScreen = () => {
    switch (screen.name) {
      case screenName.home:
        return <HomeScreen navigateTo={navigateTo} />;
      case screenName.theme:
        return <ThemeScreen navigateTo={navigateTo} theme={screen.theme} />;
      default:
        return <HomeScreen navigateTo={navigateTo} />;
    }
  };

  return { renderScreen };
};

export default useScreenHandlers;
