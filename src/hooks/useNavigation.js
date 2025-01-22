import { useState } from "react";

/* Set initialScreem to home before release */
function useNavigation(initialScreen = { name: "home", themeName: null }) {
  /*Sets the which screen component is currently displayed */
  const [screen, setScreen] = useState(initialScreen);

  const navigateTo = (name, themeName = null) => {
    setScreen({ name, themeName });
  };

  /* Returns the screen state and navigateTo function */
  return {
    screen,
    navigateTo,
  };
}

export default useNavigation;
