import React, { useEffect, useState } from "react";
import config from "../data/config.json";

// Displays a random question, determined in Deck, as the button text
function Card({
  questions,
  theme,
  reset,
  index,
  useDeckAnimation,
  handleCardClickAnimation,
}) {
  // State for checking if card toggled
  const [toggledCard, setToggledCard] = useState(false);
  // State for applying animation
  const [animate, setAnimate] = useState(true);

  // Checks if resetKey state from Deck is change, sets toggledCard to false if so.
  useEffect(() => {
    setToggledCard(false);
  }, [reset]);

  // Decides which animation to play based on Deck clicked state
  const useCardAnim = (index, animate, useDeckAnimation) => {
    return useDeckAnimation[index]
      ? `${config.sections.anims.animate} ${config.sections.anims.rotateInDownLeft}`
      : animate
      ? `${config.sections.anims.animate} ${config.sections.anims.flipInY}`
      : `${config.sections.anims.animate} ${config.sections.anims.flipOutY}`;
  };

  const animationClass = useCardAnim(index, animate, useDeckAnimation);

  // if questions haven't been retrieved by useQuestions, returns an empty div
  if (!questions) return <div></div>;
  const capitalTheme = theme.displayText.toUpperCase();

  // Creates a <p> for every question in subQuestion if there is one available
  const renderedSubquestions = questions.subQuestion.map((subQ, idx) =>
    subQ ? <p key={idx}>{subQ}</p> : null
  );

  // Toggles faceup/facedown card view, removes/applies animation
  const handleCardClick = () => {
    // Checks if Card was just drawn from deck, if so changes anim.
    if (useDeckAnimation[index]) {
      handleCardClickAnimation(index);
    }
    // setAnimate and setTimeout are used toggle card: "Out" anim plays when false, card face updates, then "In" anim plays"
    setAnimate(false);
    setTimeout(() => setToggledCard((prev) => !prev), 550);
    setTimeout(() => setAnimate(true), 500);
  };

  if (!toggledCard) {
    return (
      <div
        className={`card-face-down ${animationClass}`}
        onClick={handleCardClick}
      ></div>
    );
  }

  return (
    <div
      className={`card ${theme.color} ${animationClass}`}
      onClick={handleCardClick}
    >
      <h2 className="card-theme">{capitalTheme}</h2>
      <div className="card-question-container">
        <p className="main-question">{questions.question}</p>
        {renderedSubquestions}
      </div>
    </div>
  );
}

export default Card;
