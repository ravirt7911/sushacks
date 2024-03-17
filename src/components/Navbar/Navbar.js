import React, { useRef } from "react";
import { Link } from 'react-scroll'
import "./Navbar.css";
import { ReactComponent as Menu } from '../../assets/menuOpen.svg'
import { ReactComponent as Close } from '../../assets/close.svg'

function Navbar() {
  const ref=useRef();
  const openNav=()=>{
      ref.current.classList.toggle("open");
  }
  return (
    <header>
    <nav className="nav-elements" ref={ref}>
          <Link activeClass="" to='home' spy={true} smooth={true} offset={-70} duration={500} className="a" onClick={openNav}>HOME</Link>
          <Link activeClass='active' to='events' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav}  className="a" >ABOUT</Link>
          <Link activeClass='active' to='hackthon' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >TRACKS</Link>
          <Link activeClass='active' to='team' spy={true} smooth={true} offset={-70} duration={500} onClick={openNav}  className="a" >TIMELINE</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >PRIZES</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >SPONSORS</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >FAQ</Link>
      <button className="nav-button nav-close" onClick={openNav}><Close /></button>
    </nav>
    <button className="nav-button" onClick={openNav}><Menu/></button>
    
</header>
  );
}

export default Navbar;
