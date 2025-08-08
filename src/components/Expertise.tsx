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
                        Computer Science student with a solid foundation in full-stack web development, data structures, and software engineering. 
                        Proficient in building modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                        Strong foundation in both frontend and backend development with experience in creating user-friendly, efficient solutions, 
                        REST APIs, and database management. Quick learner with a collaborative mindset and a passion for creating scalable web applications.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;