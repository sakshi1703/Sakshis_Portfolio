import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="content">
        <div className="title"><span>My Skills</span></div>
        <div className="skill-cards">
          <div className="skills-card">
            <img src="..." alt="HTML" className="skills-card-img" />
            <h4 className="skills-card-name">HTML</h4>
          </div>
          <div className="skills-card">
            <img src="..." alt="CSS" className="skills-card-img" />
            <h4 className="skills-card-name">CSS</h4>
          </div>
          {/* Add other skills similarly */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
