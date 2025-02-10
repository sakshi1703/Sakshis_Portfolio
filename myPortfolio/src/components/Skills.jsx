import React from "react";
import { Icon } from "@iconify/react";
import "./Skills.css"

const skills = [
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React.JS", icon: "logos:react" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Data Structures & Algorithms", icon: "tabler:math-function" },
  { name: "Next.js", icon: "logos:nextjs" },
  { name: "MongoDB", icon: "logos:mongodb" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Chakra UI", icon: "simple-icons:chakraui" },


];

const Skills = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skills-card">
          <Icon icon={skill.icon} width="100px" height="100px" />
          <h4 className="skills-card-name">{skill.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Skills;
