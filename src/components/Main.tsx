import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Main.scss';
import PP from '../assets/images/Aryan-close-cropped.png';

function Main() {

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

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={PP} alt="Avatar" />
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
            <button className="resume-btn view-btn" onClick={handleResumeView}>
              <VisibilityIcon /> View Resume
            </button>
            <button className="resume-btn download-btn" onClick={handleResumeDownload}>
              <DownloadIcon /> Download Resume
            </button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/aryan-patil" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;