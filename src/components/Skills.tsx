import React from "react";
import '../assets/styles/Skills.scss';

const skillsCategories = {
    Languages: [
        { 
            name: "JavaScript", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
            color: "#F7DF1E" 
        },
        { 
            name: "TypeScript", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
            color: "#3178C6" 
        },
        { 
            name: "HTML5", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
            color: "#E34F26" 
        },
        { 
            name: "CSS3", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
            color: "#1572B6" 
        },
        { 
            name: "Python", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
            color: "#3776AB" 
        },
        { 
            name: "Java", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
            color: "#007396" 
        },
        { 
            name: "PHP", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
            color: "#777BB4" 
        },
        { 
            name: "C++", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
            color: "#00599C" 
        },
        { 
            name: "C", 
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", 
            color: "#A8B9CC" 
        },
    ],
    "Libraries and Frameworks": [
        { 
            name: "React.js", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
            color: "#61DAFB" 
        },
        { 
            name: "Node.js", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
            color: "#339933" 
        },
        { 
            name: "Express.js", 
            iconUrl: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png", 
            color: "#000000" 
        },
        { 
            name: "Tailwind CSS", 
            iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", 
            color: "#06B6D4" 
        },
        { 
            name: ".NET", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", 
            color: "#512BD4" 
        },
    ],
    "Tools and Platforms": [
        { 
            name: "Git", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
            color: "#F05032" 
        },
        { 
            name: "GitHub", 
            iconUrl: "https://icons.veryicon.com/png/o/internet--web/color-social-media-icon/github-36.png", 
            color: "#181717" 
        },
        { 
            name: "Docker", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
            color: "#2496ED" 
        },
        { 
            name: "Linux", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
            color: "#FCC624" 
        },
        { 
            name: "Windows", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", 
            color: "#0078D4" 
        },
    ],
    Databases: [
        { 
            name: "MongoDB", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
            color: "#47A248" 
        },
        { 
            name: "MySQL", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
            color: "#4479A1" 
        },
        { 
            name: "Firebase", 
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
            color: "#FFCA28" 
        },
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
                                                        <img 
                                                            src={skill.iconUrl} 
                                                            alt={`${skill.name} icon`}
                                                            className="skill-icon"
                                                            style={{ 
                                                                width: '48px', 
                                                                height: '48px',
                                                                filter: 'brightness(1.1) contrast(1.1)'
                                                            }}
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
