import React from "react";

function ThemeButton({ theme, navigateTo }) {
  return (
    <button className="theme-button" onClick={() => navigateTo("theme", theme)}>
      {theme}
    </button>
  );
}

export default ThemeButton;
