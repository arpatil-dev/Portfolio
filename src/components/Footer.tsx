import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/arpatil-dev" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/aryan-patil-381643290/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/___sohammmm/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
      </div>
      <p>Your vision, my code.</p>
      <p>&copy; 2025 Aryan Patil. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;