import React from "react";
import "./Faqs.css";
import AccordionItem from "./AccordionItem.js";
import Pic from "../../assets/among 1 (1).svg";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="content">
        <img src={Pic} alt="Among Us" className="image" />
        <h1>FAQS</h1>
      </div>
      <div className="questions">
        <AccordionItem
          id="ques1"
          question="1. When and where will Sus-Hacks take place?"
          answer="Sus-Hacks will take place on 27-28 April at Vignan's Institute of Information and Technology. Get ready for an exciting event filled with innovation and collaboration!"
        />
        <AccordionItem
          id="ques2"
          question="2. Who can participate in Sus-Hacks?"
          answer="Sus-Hacks is open to anyone passionate about driving positive change through innovation! Whether you're a student, professional, or enthusiast, you're welcome to join us."
        />
        <AccordionItem
          id="ques3"
          question="3. How do I register for Sus-Hacks?"
          answer="Registration for Sus-Hacks is simple! Click on the Register button above and submit your idea. Secure your spot today!"
        />
        <AccordionItem
          id="ques4"
          question="4. What should I bring to Sus-Hacks?"
          answer="Be sure to bring your laptop, chargers, any necessary software or tools, and lots of enthusiasm! Additionally, consider bringing snacks and water to stay energized throughout the event."
        />
        <AccordionItem
          id="ques5"
          question="5. Can I participate if I don't have a team?"
          answer="Absolutely! You can participate as an individual, and we'll help you find a team during the event. It's a great opportunity to meet new people and collaborate!"
        />
        <AccordionItem
          id="ques6"
          question="6. What if I've never participated in a hackathon before?"
          answer="No problem! Sus-Hacks welcomes participants of all experience levels. We'll have mentors and workshops available to support you throughout the event."
        />
        <AccordionItem
          id="ques7"
          question="7. What are the judging criteria for projects?"
          answer="Projects will be judged based on criteria such as innovation, impact, feasibility, and presentation. Be sure to showcase your creativity and problem-solving skills!"
        />
        <AccordionItem
          id="ques8"
          question="8. Are there any prizes for winning teams?"
          answer="Yes! Winning teams will receive exciting prizes, recognition, and opportunities to further develop their projects. Stay tuned for more details on prizes."
        />
        <AccordionItem
          id="ques9"
          question="9. Will there be food and beverages provided?"
          answer="Yes, food and beverages will be provided throughout the event to keep you fueled and focused on your projects. "
        />
        <AccordionItem
          id="ques10"
          question="10. How can I stay updated on Sus-Hacks?"
          answer="Follow us on social media  for the latest updates, announcements, and important information leading up to Sus-Hacks. Don't miss out!"
        />
      </div>
    </div>
  );
};

export default Faqs;
