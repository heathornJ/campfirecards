import React from "react";

function ThemeButton({ theme, navigateTo }) {
  return (
    <button className="theme-button" onClick={() => navigateTo("theme", theme)}>
      {theme.displayText}
    </button>
  );
}

export default ThemeButton;
