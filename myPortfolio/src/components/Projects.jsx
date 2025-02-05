import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="content">
        <div className="title"><span>My Projects</span></div>
        <div className="project-card">
          <h2>CryptoFY</h2>
          <p>CoinSquare is an innovative online cryptocurrency trading application...</p>
          <div className="buttons">
            <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="https://..." target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
