import React from "react";
import "./Home.css";
import SusHacks from "../../assets/susHacks.png";
import { ReactComponent as Start } from "../../assets/Start.svg";
import teeth from "./assets/Group 339 2.png"
import rocket from "./assets/rocket.png"

const Home = () => {
  return (
    <div id="home" className="home-container">
      
      <img src={rocket} className="rocket"/>
      <div className="logoo">
        <img src={SusHacks} alt="susHacks" className="susHacks" />
      </div>
      <div className="start">
        <Start className="start-register" />
        <a href="#" className="register">
          REGISTER
        </a>
      </div>
    </div>
  );
};

export default Home;
