import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="expertise-grid">
                <div className="expertise-card">
                    <FontAwesomeIcon icon={faReact} size="4x"/>
                    <h2>Full Stack Web Developer</h2>
                    <p>
                        Experienced <strong>Full Stack Developer</strong> specializing in the <strong>MERN stack</strong> with expertise in building scalable web applications. I create complete solutions from database design to user interfaces using modern development practices.
                    </p>
                    
                    <p>
                        Proficient in <strong>React.js, Node.js, and Express.js</strong> with focus on performance optimization and responsive design. I develop comprehensive API solutions, implement database management systems, and create intuitive user experiences.
                    </p>
                    
                    <p>
                        My collaborative approach and adaptability to emerging technologies enable me to deliver <strong>robust applications</strong> that exceed expectations while maintaining clean, maintainable code.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;