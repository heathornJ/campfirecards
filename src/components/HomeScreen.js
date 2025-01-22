import React from "react";
import ThemeButton from "./ThemeButton";
import config from "../data/config.json";

function HomeScreen({ navigateTo }) {
  const past = config.sections.themes.yourPast;
  const present = config.sections.themes.yourPresent;

  return (
    <div className="main-container">
      <h1>The Beginning of Campfire Cards</h1>
      <p>Pick your pack.</p>
      <div className="theme-buttons">
        <ThemeButton theme={past} navigateTo={navigateTo} />
        <ThemeButton theme={present} navigateTo={navigateTo} />
        <ThemeButton theme="Your Party" />
        <ThemeButton theme="Your Goals" />
        <ThemeButton theme="Your Views" />
        <ThemeButton theme="Your Thoughts" />
      </div>
    </div>
  );
}

export default HomeScreen;
