import React from "react";
import "./About.css";
import Crew from "../../assets/amongus-crew.png";
import Planet from "../../assets/planet.png";
import planetCroped from "../../assets/planet_croped.png";

function About() {
  const aboutContent = `Get ready for an exhilarating journey at Sus-Hacks! As April approaches, dive into an atmosphere brimming with purpose and excitement. Sus-Hacks is your playground whether you're passionate about tech innovation, digital equity, or making a difference. Collaborate with like-minded individuals, innovate, and push boundaries. It's not just about the end result; it's about the friendships, skills, and collective action. Join us at Sus-Hacks, and let's create a brighter future together!`;
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
      </div>
    </div>
  );
}

export default About;
