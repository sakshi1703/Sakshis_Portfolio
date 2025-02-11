import React, { useState, useEffect } from 'react';
import "./Navbar.css"

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY); // Debugging
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav-menu" className={scrolling ? "scrolled" : ""}>
      <div className="navbar">
        <div id="user-detail-name" className="logo"><span>Sakshi Thodsare</span></div>
        <ul className="menu">
          <li><a href="#home" className="nav-link home">Home</a></li>
          <li><a href="#about" className="nav-link about">About</a></li>
          <li><a href="#skills" className="nav-link skills">Skills</a></li>
          <li><a href="#projects" className="nav-link projects">Projects</a></li>
          <li><a href="#contact" className="nav-link contact">Contact</a></li>
          <li>
            <a id="resume-button-1" href="/Sakshi_resume_FE.pdf" target="_blank" download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
