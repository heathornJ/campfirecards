import React from "react";
import ThemeButton from "./ThemeButton";
import config from "../data/config.json";

function HomeScreen({ navigateTo }) {
  const past = config.sections.themes.yourPast;
  const present = config.sections.themes.yourPresent;
  const party = config.sections.themes.yourParty;
  const goals = config.sections.themes.yourGoals;
  const views = config.sections.themes.yourViews;
  const yourThoughts = config.sections.themes.yourThoughts;

  return (
    <div className="main-container">
      <h1>The Beginning of Campfire Cards</h1>
      <p>Pick your pack.</p>
      <div className="theme-buttons">
        <ThemeButton theme={past} navigateTo={navigateTo} />
        <ThemeButton theme={present} navigateTo={navigateTo} />
        <ThemeButton theme={party} navigateTo={navigateTo} />
        <ThemeButton theme={goals} navigateTo={navigateTo} />
        <ThemeButton theme={views} navigateTo={navigateTo} />
        <ThemeButton theme={yourThoughts} navigateTo={navigateTo} />
      </div>
    </div>
  );
}

export default HomeScreen;
