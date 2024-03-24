import React from "react";
import "./Footer.css";
import img1 from '../../assets/Group 339 1.png'
import { ReactComponent as Start } from "../../assets/Start.svg";
import SusHacks from "../../assets/susHacks.png";
import img2 from '../../assets/Group 416.png'
import vignanLogo from "./assest/2016-09-6-06-44-05_vignanlogo (1) 1.png";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-Description">
        <img src={img1} alt="image" />
        <p>Dive deeper into the Sus-Hacks experience! Register now to join the community and secure your spot at the hackathon. Let's make a difference together!</p>
        <div className="start">
          <Start className="start-register" />
          <a href="#" className="register">
            REGISTER
          </a>
        </div>
      </div>
      <div className="Footer-Logo">
        <div className="logoo">
          <img src={SusHacks} alt="susHacks" className="susHacks" />
        </div>
        <div className="Footer-profiles">
          {/* Add social media profiles or links here */}
        </div>
        <div className="Footer-address">
          <p className="text-email">sushacks.viit@gmail.com</p>
          <p className="text-email">Vignan's Institute Of Information Technology,Duvvada</p>
          <img src={vignanLogo} className="vignanLogo" height="50px"/>
        </div>
      </div>
      <div className="Footer-Clubs">
        <div className="Footer-all-Links">
        <div className="Footer-nav-links">
          <p> <a href="#home">HOME</a></p>
          <p> <a href="#about">ABOUT</a></p>
          <p><a href="#tracks">TRACKS</a></p>
          <p><a href="#timeline">TIMELINE</a></p>
        </div>
        <div className="Footer-nav-links">
          <p><a href="#prizes">PRIZES</a></p>
          <p><a href="#sponsors">SPONSORS</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#contactus">CONTACTUS</a></p>
        </div>
        </div>
        <div className="Footer-Community-partners">
          <h5>Community partner</h5>
          <div>
            <img src={img2} height={80} width={250} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
