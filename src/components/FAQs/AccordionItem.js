import React, { useState } from "react";
import "./Faqs.css";
import pic1 from "../../assets/Rectangle 152.svg";

const AccordionItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`accordion-container ${expanded ? "expanded" : ""}`}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ques">
        <div className="accordion-item">
          <div className="question">{question}</div>
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
