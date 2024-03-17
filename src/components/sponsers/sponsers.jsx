import React from "react";
import "./sponsers.css";
import mongo from "./images/mongo 1.svg";
import devpost from "./images/dev-removebg-preview 1.svg";
import polygon from "./images/polygon 1.svg";
import hedra from "./images/hedra-removebg-preview 1.svg";
import cloud from "./images/img2-removebg-preview 1.svg";

export default function Sponsers() {
  return (
    <div className="sponsers">
      <p className="heading">SPONSERS</p>
      <div className="sponsers-divs">
        <p style={{ color: "#78B4DF" }}>PLATINUM</p>
        <div className="sponsers-imgs">
          <a href="#">
            <img src={devpost} />
          </a>
          <a href="#">
            <img src={mongo} />
          </a>
        </div>
      </div>
      <div className="sponsers-divs">
        <p style={{ color: "#EAD774" }}>GOLD</p>
        <div className="sponsers-imgs">
          <a href="#">
            <img src={polygon} />
          </a>
          <a href="#">
            <img src={cloud} />
          </a>
        </div>
      </div>
      <div className="sponsers-divs">
        <p style={{ color: "#FFFCEA" }}>SILVER</p>
        <div className="sponsers-imgs">
          <a href="#">
            <img src={hedra} />
          </a>
        </div>
      </div>
    </div>
  );
}
