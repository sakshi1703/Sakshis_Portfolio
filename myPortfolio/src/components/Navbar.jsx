import React from 'react';

function Navbar() {
  return (
    <nav id="nav-menu">
      <div className="navbar">
        <div id="user-detail-name" className="logo"><span>Shivam Mishra</span></div>
        <ul className="menu">
          <li><a href="#home" className="nav-link home">Home</a></li>
          <li><a href="#about" className="nav-link about">About</a></li>
          <li><a href="#skills" className="nav-link skills">Skills</a></li>
          <li><a href="#projects" className="nav-link projects">Projects</a></li>
          <li><a href="#contact" className="nav-link contact">Contact</a></li>
          <li>
            <a id="resume-button-1" href="/Images/ShivamRESUME.pdf" target="_blank" download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
