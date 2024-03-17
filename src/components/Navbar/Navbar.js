import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a className="nav_link" href="/home">
          HOME
        </a>
        <a className="nav_link" href="/about">
          ABOUT
        </a>
        <a className="nav_link" href="/tracks">
          TRACKS
        </a>
        <a className="nav_link" href="/timeline">
          TIMELINE
        </a>
        <a className="nav_link" href="/prizes">
          PRIZES
        </a>
        <a className="nav_link" href="/sponsors">
          SPONSORS
        </a>
        <a className="nav_link" href="/faq">
          FAQ
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
