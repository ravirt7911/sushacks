import React from "react";
import "./About.css";
import Crew from "../../assets/amongus-crew.png";
import Planet from "../../assets/planet.png";
import planetCroped from "../../assets/planet_croped.png";
import Amongus from "../../assets/Among_us.png";
import single from "../../assets/amongus-single.png";

function About() {
  const aboutContent = `Unleash your creativity and be a part of Rebase<01>,
     a month-long online hackathon extragavanza! Compete across various categories,
     showcasing your skill, creativity, and teamwork alongside peers who share your 
     passion. This is you chance to challenge yourself, learn new skills, and create.`;

  return (
    <div id="about" className="home-about">
      <div className="crew">
        <img src={Crew} alt="susHacks" className="susHacks" />
      </div>
      <div className="planetCroped">
        <img src={planetCroped} alt="planetCroped" className="planetCroped" />
        </div>
      <div className="planet">
        <img src={Planet} alt="planet" className="planet" />
        <div className="about-content">
          <p>About</p>
          <p id="content">{aboutContent}</p>
        </div>
        <div className="single-container">
        <img src={single} alt="single" className="single" />
      </div>
      <div className="amongus-container">
        <img src={Amongus} alt="amongus" className="amongus" />
      </div>
      </div>
    </div>
  );
}

export default About;
