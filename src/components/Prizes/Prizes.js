import React from "react";
import "./Prizes.css";
import PrizeMoney from "../../assets/Group 375.svg";
const Prizes = () => {
  return (
    <div className="page">
      <div className="prizes">
        <p className="heading">PRIZES</p>
      </div>
      <div className="combined">
        <img src={PrizeMoney} alt="Prizes" className="prize" />
      </div>
    </div>
  );
};

export default Prizes;
