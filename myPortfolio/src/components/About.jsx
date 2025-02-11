import React from 'react';
import SakshiPhoto from '../assets/SakshiPhoto.jpeg'; 

function About() {
  return (
    <section id="about" className="about section">
      <div className="content">
        <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
            <img src={SakshiPhoto} alt="Sakshi Thodsare" className="home-img" />
          </div>
          <div className="right">
            <div className="topic">Developing Is My Passion</div>
            <p>Ambitious Full Stack developer with a knack for crafting innovative solutions. Proficient in React.js, MongoDB, Express.js, and JavaScript. Proven ability in executing solo and collaborative projects. Eager to embrace new technologies and contribute to dynamic development environments, demonstrating adaptability and a commitment to excellence.</p>
            <div className="button">
              <a id="resume-button-2" href="/Sakshi_resume_FE.pdf" target="_blank" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
