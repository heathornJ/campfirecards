import React, { useState } from "react";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="alert">
      <h3>Welcome to Campfire Cards! Here's the latest update:</h3>
      <p>
        This is a small project built to get some practice with React and to
        help improve D&D sessions for my players.
        <br />
        <br />
        This was initially built with only desktop in mind, but I later came to
        the conclusion that the option of using it on mobile would be
        beneficial. If you notice any strange behaviour on mobile, do report it
        to me below.
        <br />
        <br />
        It may receive occasional updates once finished, but that's not
        guaranteed. If you like what I've done or have any suggestions do let me
        know over on my{" "}
        <a href="https://github.com/heathornJ" target="_blank" rel="noreferrer">
          GitHub.
        </a>
      </p>
      <h3>Known Bugs</h3>
      <ul>
        <li>
          Card will draw face-up if the deck is clicked during the card's flip
          animation.
        </li>
      </ul>
      <button onClick={handleClose}>Got it!</button>
    </div>
  );
};

export default Alert;
