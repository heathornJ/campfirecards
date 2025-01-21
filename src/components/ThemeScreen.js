import React from "react";

function ThemeScreen(props) {
  return (
    <div className="main-container">
      <h1>{props.theme}</h1>
      <button onClick={() => props.navigateTo("home")}>Home</button>
      <button>{props.theme}</button>
    </div>
  );
}

export default ThemeScreen;
