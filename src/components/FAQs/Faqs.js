import React from "react";
import "./Faqs.css";
import AccordionItem from "./AccordionItem.js";
import Pic from "../../assets/among 1 (1).svg";
import pic1 from "../../assets/Rectangle 152.svg"

const Faqs = () => {
  return (
    <div className="faqs" >
      <div className="content">
        <img src={Pic} alt="Among Us" className="image" />
        <h1>FAQS</h1>
      </div>
      <div className="questions">
        <AccordionItem
         id="ques"
          question="When and where will Sus-Hacks 2024 takes place? "
          answer="Lorem Ipsum is simply dummy text of the printing and ."
        />
        <AccordionItem question="Question 2"  answer="Answer 2" />
      </div>
    </div>
  );
};

export default Faqs;
