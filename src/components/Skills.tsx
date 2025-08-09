import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faReact, 
    faNodeJs, 
    faJs, 
    faHtml5, 
    faCss3Alt, 
    faPython, 
    faJava, 
    faPhp, 
    faGit, 
    faGithub, 
    faDocker, 
    faLinux, 
    faWindows 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCog } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Skills.scss';

const skillsCategories = {
    Languages: [
        { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
        { name: "HTML5", icon: faHtml5, color: "#E34F26" },
        { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
        { name: "Python", icon: faPython, color: "#3776AB" },
        { name: "Java", icon: faJava, color: "#007396" },
        { name: "PHP", icon: faPhp, color: "#777BB4" },
        { name: "C++", icon: faCode, color: "#00599C" },
        { name: "C", icon: faCode, color: "#A8B9CC" },
    ],
    "Libraries and Frameworks": [
        { name: "React.js", icon: faReact, color: "#61DAFB" },
        { name: "Node.js", icon: faNodeJs, color: "#339933" },
        { name: "Express.js", icon: faCog, color: "#000000" },
        { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" },
        { name: ".NET", icon: faCode, color: "#512BD4" },
    ],
    "Tools and Platforms": [
        { name: "Git", icon: faGit, color: "#F05032" },
        { name: "GitHub", icon: faGithub, color: "#181717" },
        { name: "Docker", icon: faDocker, color: "#2496ED" },
        { name: "Linux", icon: faLinux, color: "#FCC624" },
        { name: "Windows", icon: faWindows, color: "#0078D4" },
    ],
    Databases: [
        { name: "MongoDB", icon: faDatabase, color: "#47A248" },
        { name: "MySQL", icon: faDatabase, color: "#4479A1" },
        { name: "Firebase", icon: faDatabase, color: "#FFCA28" },
    ]
};

function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills-section">
                <h1>Technical Skills</h1>
                                <div className="skills-categories">
                                    {Object.entries(skillsCategories).map(([category, skills]) => (
                                        <div key={category} className="skills-category">
                                            <h2 className="skills-category-title">{category}</h2>
                                            <div className="skills-grid">
                                                {skills.map((skill, index) => (
                                                    <div key={index} className="skill-item">
                                                        <FontAwesomeIcon 
                                                            icon={skill.icon} 
                                                            size="3x" 
                                                            style={{ color: skill.color }}
                                                        />
                                                        <span className="skill-name">{skill.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
            </div>
        </div>
    );
}

export default Skills;
