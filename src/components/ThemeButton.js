import React from "react";

function ThemeButton({ themeName, navigateTo }) {
  return (
    <button
      className="theme-button"
      onClick={() => navigateTo("theme", themeName)}
    >
      {themeName}
    </button>
  );
}

export default ThemeButton;
