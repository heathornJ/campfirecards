import React from "react";
import config from "../data/config.json";

function ThemeButton({ theme, navigateTo }) {
  const themeScreen = config.sections.screens.theme;
  return (
    <button
      className="theme-button"
      onClick={() => navigateTo(themeScreen, theme)}
    >
      {theme.displayText}
    </button>
  );
}

export default ThemeButton;
