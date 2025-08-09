import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="container" id="about">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-text">
          <p>
            I'm <strong>Aryan Patil</strong>, a passionate Computer Science student from Kolhapur, India, with a solid foundation in full-stack web development and software engineering. Currently pursuing my B.Tech in Computer Science & Engineering with an impressive CGPA of 8.4/10.
          </p>
          
          <p>
            My journey in technology began during my diploma studies, where I developed a strong foundation in programming and computer engineering fundamentals. Since then, I've gained hands-on experience through internships and real-world projects, working with modern technologies like the MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>
          
          <p>
            I'm a <strong>quick learner</strong> with a <strong>collaborative mindset</strong> and a passion for creating user-friendly, efficient solutions. My experience includes working with development teams, contributing to web-based projects, and building innovative applications like real-time collaboration tools and AI-powered platforms.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h3><FontAwesomeIcon icon={faBullseye} className="highlight-icon" /> Core Focus</h3>
              <p>Full-Stack Web Development with MERN Stack</p>
            </div>
            
            <div className="highlight-item">
              <h3><FontAwesomeIcon icon={faLightbulb} className="highlight-icon" /> Passion</h3>
              <p>Creating scalable, user-friendly applications</p>
            </div>
            
            <div className="highlight-item">
              <h3><FontAwesomeIcon icon={faRocket} className="highlight-icon" /> Goal</h3>
              <p>Building innovative solutions that make a difference</p>
            </div>
          </div>
          
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. I believe in continuous learning and am always excited to take on new challenges that push my boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
