import React from "react";
import ThemeButton from "./ThemeButton";

function HomeScreen({ navigateTo }) {
  return (
    <div className="main-container">
      <h1>The Beginning of Campfire Cards</h1>
      <p>Pick your pack.</p>
      <div className="theme-buttons">
        <ThemeButton theme="Your Past" navigateTo={navigateTo} />
        <ThemeButton theme="Your Present" />
        <ThemeButton theme="Your Party" />
        <ThemeButton theme="Your Goals" />
        <ThemeButton theme="Your View" />
        <ThemeButton theme="Your Thoughts" />
      </div>
    </div>
  );
}

export default HomeScreen;
