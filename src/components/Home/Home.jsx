import React from "react";
import "./Home.css";
import SusHacks from "../../assets/susHacks.png";
import { ReactComponent as Start } from "../../assets/Start.svg";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="logoo">
        <img src={SusHacks} alt="susHacks" className="susHacks" />
      </div>
      <div className="start">
        <Start className="start-register" />
        <a href="#" className="register">
          REGISTER NOW
        </a>
      </div>
    </div>
  );
};

export default Home;
