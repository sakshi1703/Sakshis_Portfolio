import React from 'react';
import Ui from "../assets/Ui.png"

import "./Projects.css"

function Projects() {
  return (
    <section id="projects">
      <div className="content">
        <div className="title"><span>My Projects</span></div>
        
        <div className="project-card">
          <h2>Trezen: Simplified Travel Planning</h2>
          <p>Trezen: Simplified Travel Planning A bilingual platform that streamlines booking flights, stays, and activities...</p>
          <div className="buttons">
            <a href="https://github.com/shivamtechtecho/CW_Project_RCT-NEM" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="https://trezen-smart-scipters.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>

        </div>

        <div className="project-card">
          <h2>Unity Hub: Collaborative Community Platform</h2>
          <p>Unity Hub is a platform designed to foster collaboration and community engagement...</p>
          <img src= {Ui} alt="Sakshi Thodsare" style={{width: "100px", height: "auto",borderRadius: "5px",marginRight: "20px",float: "left"}}/>
          <div className="buttons">
            <a href="https://github.com/vinit3200/B42_WEB_067_Scripting-Stars" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="https://unity-hub.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>

        </div>

        <div className="project-card">
          <h2> WeatherApp: Real-time Weather Forecast</h2>
          <p>WeatherApp provides real-time weather updates and a 5-day weather forecast...</p>
          <div className="buttons">
            <a href="https://github.com/sakshi1703/WeatherForecast" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="a-weatherforecast.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;
