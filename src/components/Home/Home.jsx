import React from "react";
import "./Home.css";
import SusHacks from "../../assets/susHacks.png";
import { ReactComponent as Start } from "../../assets/Start.svg";
import rocket from "./assets/rocket.png";
import amongusFloating from "./assets/Among_us__1_-removebg-preview (2) 1.png";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <img src={rocket} className="rocket"/>
      <img src={amongusFloating} className="floating-amongus"/>
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
