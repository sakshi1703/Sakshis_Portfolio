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
            <p>Ambitious Full Stack developer with a knack for crafting innovative solutions...</p>
            <div className="button">
              <a id="resume-button-2" href="/Images/ShivamRESUME.pdf" target="_blank" download>
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
