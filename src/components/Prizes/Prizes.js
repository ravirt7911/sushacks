import React from "react";
import "./Prizes.css";
import PrizeMoney from "../../assets/Prizes.png";
import Prize from "../../assets/image 6.svg";
const Prizes = () => {
  return (
    <div id="prizes" className="page">
      <div className="prizes">
        <img src={Prize} alt="Prizes" className="prize" />
        <p className="heading">PRIZES</p>
      </div>
      <div className="combined">
        <img src={PrizeMoney} alt="Prizes" className="prize-details" />
      </div>
    </div>
  );
};

export default Prizes;
