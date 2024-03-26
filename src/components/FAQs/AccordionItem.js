import React, { useState } from "react";
import "./Faqs.css";

const AccordionItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-container ${expanded ? "expanded" : ""}`}>
      <div className="ques">
        <div className="accordion-item">
          <div className="question" style={{fontWeight: 800}}>{question}</div>
          <button className="toggle-button" onClick={toggleAccordion}>
            {expanded ? "▲" : "▼"}
          </button>
        </div>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
