import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../assets/styles/Main.scss';
import PP from '../assets/images/Aryan-close-cropped.avif';
import PP_SPECS from '../assets/images/Aryan-Patil.avif';

function Main() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls down from top
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeView = () => {
    // Replace with your actual resume URL or path
    const resumeUrl = "/resume.pdf"; // You'll need to add your resume file to the public folder
    window.open(resumeUrl, '_blank');
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume URL or path
    const resumeUrl = "/resume.pdf"; // You'll need to add your resume file to the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aryan_Patil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://arpatil.dev/Aryan-close-cropped.png" alt="Avatar" /> */}
          <img src={PP_SPECS} alt="Avatar" />
          {/* <img src={PP} alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/aryan-patil-381643290/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/___sohammmm/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
            {/* <a href="https://x.com/your_x_profile" target="_blank" rel="noreferrer"><XIcon /></a> */}
          </div>
          <h1>Aryan Patil</h1>
          <p>Full Stack Developer</p>

          <div className="resume-buttons">
            <button className="resume-btn download-btn" onClick={handleResumeView}>
              <VisibilityIcon /> View Resume
            </button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/aryan-patil-381643290/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/___sohammmm/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="scroll-indicator" onClick={handleScrollDown}>
          <div className="scroll-arrow">
            <KeyboardArrowDownIcon />
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      )}
    </div>
  );
}

export default Main;