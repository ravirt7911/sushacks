import React from "react";
import "./Faqs.css";
import AccordionItem from "./AccordionItem.js";
import Pic from "../../assets/among 1 (1).svg";
import Pic1 from "../../assets/Group 377.svg";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="content">
        <img src={Pic} alt="Among Us" className="image" />
        <h1>FAQS</h1>
      </div>
      <div className="questions">
        <AccordionItem
          question="When and where will Sus-Hacks 2024 takes place? "
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          backgroundImage={Pic1}
        />
        <AccordionItem
          question="Question 2"
          answer="Answer 2"
          backgroundImage={Pic1}
        />
        {/* Add more AccordionItem components as needed */}
      </div>
    </div>
  );
};

export default Faqs;
