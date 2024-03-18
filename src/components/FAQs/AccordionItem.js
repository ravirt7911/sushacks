import React, { useState } from "react";
import "./Faqs.css";

const AccordionItem = ({ question, answer, containerBackgroundImage }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className="accordion-container"
      style={{ backgroundImage: `url(${containerBackgroundImage})` }}
    >
      <div className="accordion-item">
        <div className="question">{question}</div>
        <button className="toggle-button" onClick={toggleAnswer}>
          {showAnswer ? "▲" : "▼"}
        </button>
        {showAnswer && <div className="answer">{answer}</div>}
      </div>
    </div>
  );
};

export default AccordionItem;
