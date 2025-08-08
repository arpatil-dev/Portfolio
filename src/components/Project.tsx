import React from "react";
import mock01 from '../assets/images/Colab.png';
import mock02 from '../assets/images/Ninjanest.png';
import mock03 from '../assets/images/Toggl.png';
import mock04 from '../assets/images/Technotsav.png';
import mock05 from '../assets/images/Dattamsh.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>CoLab – Remote Team Collaboration Tool</h2></a>
                <p>Built a comprehensive platform enabling real-time collaboration with Kanban boards, chat functionality, and team management features using MERN stack, JWT authentication, StreamChat, and Agora.io for video communication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>NinjaNest – Student Accommodation Platform</h2></a>
                <p>Created a platform for students to rent, book, and list rooms with AI-based price prediction and intelligent roommate matching system. Built using MERN stack with Google OAuth integration for secure authentication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>Toggl – Drag-and-Drop Website Builder</h2></a>
                <p>Developed a no-code website builder with intuitive drag-and-drop interface, domain linking capabilities, and hosting features. Implemented using MERN stack with JWT authentication and GrapeJS for the visual editor.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>E-Commerce Web Application</h2></a>
                <p>Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React.js frontend, Node.js/Express.js backend, and MongoDB database.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>Toggl – Drag-and-Drop Website Builder</h2></a>
                <p>Developed a no-code website builder with intuitive drag-and-drop interface, domain linking capabilities, and hosting features. Implemented using MERN stack with JWT authentication and GrapeJS for the visual editor.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><h2>E-Commerce Web Application</h2></a>
                <p>Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React.js frontend, Node.js/Express.js backend, and MongoDB database.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;