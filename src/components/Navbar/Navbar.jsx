import React from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
import "./Navbar.css";
import { ReactComponent as Menu } from "../../assets/menuOpen.svg";
import { ReactComponent as Close } from "../../assets/close.svg";

function Navbar() {
  const ref = useRef();
  const openNav = () => {
    ref.current.classList.toggle("open");
  };
  return (
    <div className="navbar-container">
      <div className="GlowEffect"></div>
      <nav ref={ref}>
        <button className="nav-button nav-close" onClick={openNav}>
          <Close />
        </button>
        <div className="links">
          <Link
            activeClass=""
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_link active"
            onClick={openNav}
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            ABOUT
          </Link>
          <Link
            activeClass="active"
            to="tracks"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            TRACKS
          </Link>
          <Link
            activeClass="active"
            to="timeline"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            TIMELINE
          </Link>
          <Link
            activeClass="active"
            to="prizes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            PRIZES
          </Link>
          <Link
            activeClass="active"
            to="sponsors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            SPONSORS
          </Link>
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={openNav}
            className="nav_link"
          >
            FAQ
          </Link>
        </div>
      </nav>
      <button className="nav-button" onClick={openNav}>
        <Menu />
      </button>
    </div>
  );
}

export default Navbar;
