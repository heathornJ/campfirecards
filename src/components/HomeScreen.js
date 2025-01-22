import React from "react";
import ThemeButton from "./ThemeButton";

function HomeScreen({ navigateTo }) {
  return (
    <div className="main-container">
      <h1>The Beginning of Campfire Cards</h1>
      <p>Pick your pack.</p>
      <div className="theme-buttons">
        <ThemeButton themeName="Your Past" navigateTo={navigateTo} />
        <ThemeButton themeName="Your Present" navigateTo={navigateTo} />
        <ThemeButton themeName="Your Party" />
        <ThemeButton themeName="Your Goals" />
        <ThemeButton themeName="Your View" />
        <ThemeButton themeName="Your Thoughts" />
      </div>
    </div>
  );
}

export default HomeScreen;
