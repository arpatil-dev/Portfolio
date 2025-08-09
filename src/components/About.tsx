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
  I'm <strong>Aryan Patil</strong>, a results-driven <strong>Full Stack Developer</strong> from Kolhapur, India, specializing in building scalable, user-centric applications. Skilled in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), I deliver high-quality web solutions with clean, maintainable code and a strong focus on performance.
</p>

<p>
  My journey in technology began during my diploma studies, where I built a solid foundation in programming and computer engineering fundamentals. Since then, I have gained hands-on experience through internships and real-world projects, creating solutions that range from real-time collaboration platforms to AI-powered tools.
</p>

<p>
  I'm a <strong>quick learner</strong> with a <strong>collaborative mindset</strong> and a passion for crafting efficient, user-friendly solutions. My experience includes working in development teams, contributing to high-impact projects, and continuously adapting to emerging technologies to stay ahead in the industry.
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
