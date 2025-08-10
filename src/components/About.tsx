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
            I'm <strong>Aryan Patil</strong>, a passionate <strong>Full Stack Developer</strong> from Kolhapur, India, specializing in the <strong>MERN stack</strong>. I build scalable, user-centric applications with clean, maintainable code and a strong focus on performance.
          </p>

          <p>
            My technology journey began during diploma studies, where I built a solid foundation in programming. Through internships and real-world projects, I've created solutions ranging from real-time collaboration platforms to AI-powered tools.
          </p>

          <p>
            I'm a <strong>quick learner</strong> with a <strong>collaborative mindset</strong>, always adapting to emerging technologies and crafting efficient, user-friendly solutions.
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
            When I'm not coding, I explore new technologies and stay updated with the latest web development trends. I believe in continuous learning and am always excited to take on challenges that push my boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
