import React from "react";
import "./Sponsors.css";
import mongo from "./images/mongo 1.svg";
import devpost from "./images/dev-removebg-preview 1.svg";
import polygon from "./images/polygon 1.svg";
import hedra from "./images/hedra-removebg-preview 1.svg";
import cloud from "./images/img2-removebg-preview 1.svg";
import angelImg from "./images/Among_Us_Angel_Sticker-removebg-preview.png";

export default function Sponsors() {
  return (
    <div id="sponsors" className="sponsors">
      <p className="heading">SPONSORS</p>
      <img id="angel" src={angelImg} height="180px" />
      <div className="sponsors-divs">
        <p style={{ color: "#78B4DF", fontSize: "100px" }}>PLATINUM</p>
        {/* <div className="sponsors-imgs">
        <a href="#">
            <img src={devpost} /></a>
            <a href="#">
            <img src={mongo} /></a>
        </div> */}
      </div>
      <div className="sponsors-divs">
        <p style={{ color: "#EAD774", fontSize: "100px" }}>GOLD</p>
        {/* <div className="sponsors-imgs">
        <a href="#">
            <img src={polygon} /></a>
            <a href="#">
            <img src={cloud} /></a>
        </div> */}
      </div>
      <div className="sponsors-divs">
        <p style={{ color: "#FFFCEA", fontSize: "100px" }}>SILVER</p>
        <div className="sponsors-imgs">
        <a href="#">
           <img src={hedra} /></a>
        </div>
      </div>
    </div>
  );
}
