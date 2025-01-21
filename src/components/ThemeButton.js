import React from "react";

function ThemeButton(props) {
  return (
    <button
      className="theme-button"
      onClick={() => props.navigateTo("theme", props.theme)}
    >
      {props.theme}
    </button>
  );
}

export default ThemeButton;
