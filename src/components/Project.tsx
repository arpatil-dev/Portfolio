import React from "react";
import mock01 from '../assets/images/Colab.png';
import mock02 from '../assets/images/Ninjanest.png';
import mock03 from '../assets/images/Toggl.png';
import mock04 from '../assets/images/Technotsav.png';
import mock05 from '../assets/images/Dattamsh.png';
import mock06 from '../assets/images/BNK.png';
import mock07 from '../assets/images/Gram.png';
import mock08 from '../assets/images/Add.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://colab-1tfx.vercel.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://colab-1tfx.vercel.app/" target="_blank" rel="noreferrer"><h2>CoLab – Remote Team Collaboration Tool</h2></a>
                <p>Built a comprehensive platform enabling real-time collaboration with Kanban boards, chat functionality, and team management features using MERN stack, JWT authentication, StreamChat, and Agora.io for video communication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Undefined-Hub/NinjaNest" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Undefined-Hub/NinjaNest" target="_blank" rel="noreferrer"><h2>NinjaNest – Student Accommodation Platform</h2></a>
                <p>Created a platform for students to rent, book, and list rooms with AI-based price prediction and intelligent roommate matching system. Built using MERN stack with Google OAuth integration for secure authentication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/TogglHQ/toggl-v2" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/TogglHQ/toggl-v2" target="_blank" rel="noreferrer"><h2>Toggl – Drag-and-Drop Website Builder</h2></a>
                <p>Developed a no-code website builder with intuitive drag-and-drop interface, domain linking capabilities, and hosting features. Implemented using MERN stack with JWT authentication and GrapeJS for the visual editor.</p>
            </div>
            <div className="project">
                <a href="https://technotsav-dypcet.vercel.app/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://technotsav-dypcet.vercel.app/" target="_blank" rel="noreferrer"><h2>Technotsav Website</h2></a>
                <p>Developed a dynamic website for the Technotsav event, featuring event schedules, speaker profiles, and registration forms. Built with React.js and Node.js, ensuring a seamless user experience.</p>
            </div>
            <div className="project">
                <a href="https://vizzdumbb.github.io/Dattamsh_Cinema/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://vizzdumbb.github.io/Dattamsh_Cinema/" target="_blank" rel="noreferrer"><h2>Dattamsh Cinema Movie Booking System</h2></a>
                <p>Developed a comprehensive cinema management system using HTML, CSS and vanilla JS, featuring movie listings, showtimes, and ticket booking functionalities.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev/Bank-Management-System" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev/Bank-Management-System" target="_blank" rel="noreferrer"><h2>Bank Management System using Java</h2></a>
                <p>Developed a comprehensive bank management system using Java Swing, JDBC, and MySQL, featuring user authentication, account management, and transaction processing. Implemented with a focus on security and performance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Yash-Ainapure/EGramProject" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Yash-Ainapure/EGramProject" target="_blank" rel="noreferrer"><h2>Grampanchyat Valivade Website</h2></a>
                <p>Developed a dynamic website for the Grampanchyat Valivade, showcasing local news, events, and resources. Built with HTML and Node.js, featuring a user-friendly interface and responsive design.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arpatil-dev/StudentAdmissionManagementSystem" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arpatil-dev/StudentAdmissionManagementSystem" target="_blank" rel="noreferrer"><h2>Student Admission Management System using VB.Net</h2></a>
                <p>Developed a comprehensive student admission management system using VB.Net, featuring student registration, receipt generation using Crystal Reports (SAP), and data storing functionalities.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;