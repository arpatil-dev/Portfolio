import React, { useState } from "react";
import mock01 from "../assets/images/Colab.png";
import mock02 from "../assets/images/Ninjanest.png";
import mock03 from "../assets/images/Toggl.png";
import mock04 from "../assets/images/Technotsav.png";
import mock05 from "../assets/images/Dattamsh.png";
import mock06 from "../assets/images/BNK.png";
import mock07 from "../assets/images/Gram.png";
import mock08 from "../assets/images/Add.png";
import mock69 from "../assets/images/Classtro.png";
import mock10 from "../assets/images/TrackORoute.png";
import github from "../assets/images/github.svg";
import mock09 from "../assets/images/R8IFY.png";
import mocktor from "../assets/images/tor.png";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../assets/styles/Project.scss";

function Project() {
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (projectId: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const projects = [
    {
      id: 10,
      image: mock69,
      title: "Classtro - Engage Any Audience, Anywhere",
      description:
        "Classtro is a collaborative classroom management platform that connects teachers and students through digital tools. Teachers can create classes, share assignments, conduct polls, and host Q&A sessions, while students can participate, respond, and interact in real time. The system includes secure authentication, detailed analytics, and a responsive UI to ensure smooth communication and effective academic engagement.",
      demoLink: "https://classtro.live/",
      githubLink: "https://github.com/Undefined-Hub/Classtro",
    },
    {
      id: 8,
      image: mock09,
      title: "R8IFY - A role-based store rating and management platform.",
      description:
        "A full-stack web app with role-based access for Admins, Store Owners, and Users. Users can browse and rate stores, owners manage dashboards, and admins monitor stats. Features secure authentication, validations, and a responsive UI for a seamless experience.",
      demoLink: "https://r8ify.vercel.app/",
      githubLink: "https://github.com/arpatil-dev/R8IFY",
    },
    {
      id: 11,
      image: mocktor,
      title: "TrackORoute - React Native App",
      description:
        "TrackORoute is a real-time location tracking application that captures and manages user routes with high accuracy in both foreground and background. It intelligently optimizes tracking for precision and battery efficiency, logs complete journeys with start and end points, and provides smooth trip visualization. Designed for navigation, fitness, logistics, and travel logging, TrackORoute delivers a reliable and seamless tracking experience.",
      demoLink: "https://track-o-route.vercel.app/",
      githubLink: "https://github.com/arpatil-dev/TrackORoute",
    },
    {
      id: 9,
      image: mock10,
      title: "(Admin) Track O Route - A Trip and Route Tracking App",
      description:
        "TrackORoute is a real-time location tracking app that records routes with high accuracy in both foreground and background. It optimizes tracking to balance precision and battery life, highlights start/end points, and captures detailed journeys for navigation, fitness, and trip logging.",
      demoLink: "https://track-o-route.vercel.app/",
      githubLink: "https://github.com/arpatil-dev/TrackORoute",
    },
    {
      id: 0,
      image: mock01,
      title: "CoLab – Remote Team Collaboration Tool",
      description:
        "Built a comprehensive platform enabling real-time collaboration with Kanban boards, chat functionality, and team management features using MERN stack, JWT authentication, StreamChat, and Agora.io for video communication.",
      demoLink: "https://colab-1tfx.vercel.app/",
      githubLink: "https://github.com/Yash-Ainapure/Hackathon",
    },
    {
      id: 1,
      image: mock02,
      title: "NinjaNest – Student Accommodation Platform",
      description:
        "Created a platform for students to rent, book, and list rooms with AI-based price prediction and intelligent roommate matching system. Built using MERN stack with Google OAuth integration for secure authentication.",
      demoLink: "https://ninja-nest-alpha.vercel.app/",
      githubLink: "https://github.com/Undefined-Hub/NinjaNest",
    },
    {
      id: 2,
      image: mock03,
      title: "Toggl – Drag-and-Drop Website Builder",
      description:
        "Developed a no-code website builder with intuitive drag-and-drop interface, domain linking capabilities, and hosting features. Implemented using MERN stack with JWT authentication and GrapeJS for the visual editor.",
      demoLink: "https://www.toggl.site/",
      githubLink: "https://github.com/TogglHQ/toggl-v2",
    },
    {
      id: 3,
      image: mock04,
      title: "Technotsav 2k25 - Event Website",
      description:
        "Developed a dynamic website for the Technotsav event, featuring event schedules, speaker profiles, and registration forms. Built with React.js and Node.js, ensuring a seamless user experience.",
      demoLink: "https://technotsav-dypcet.vercel.app/",
      githubLink: "https://github.com/PrarambhDevelopers/technotsav",
    },
    {
      id: 4,
      image: mock05,
      title: "Dattamsh Cinema Movie Booking System",
      description:
        "Developed a comprehensive cinema management system using HTML, CSS and vanilla JS, featuring movie listings, showtimes, and ticket booking functionalities.",
      demoLink: "https://vizzdumbb.github.io/Dattamsh_Cinema/",
      githubLink: "https://github.com/vizzdumbb/Dattamsh_Cinema",
    },
    {
      id: 5,
      image: mock07,
      title: "Grampanchyat Valivade Website",
      description:
        "Developed a dynamic website for the Grampanchyat Valivade, showcasing local news, events, and resources. Built with HTML and Node.js, featuring a user-friendly interface and responsive design.",
      demoLink: "https://github.com/Yash-Ainapure/EGramProject",
      githubLink: "https://github.com/Yash-Ainapure/EGramProject",
    },
    {
      id: 6,
      image: mock06,
      title: "Bank Management System using Java Swing",
      description:
        "Developed a comprehensive bank management system using Java Swing, JDBC, and MySQL, featuring user authentication, account management, and transaction processing. Implemented with a focus on security and performance.",
      demoLink: "https://github.com/arpatil-dev/Bank-Management-System",
      githubLink: "https://github.com/arpatil-dev/Bank-Management-System",
    },

    {
      id: 7,
      image: mock08,
      title: "Student Admission Management System using VB.Net",
      description:
        "Developed a comprehensive student admission management system using VB.Net, featuring student registration, receipt generation using Crystal Reports (SAP), and data storing functionalities.",
      demoLink:
        "https://github.com/arpatil-dev/StudentAdmissionManagementSystem",
      githubLink:
        "https://github.com/arpatil-dev/StudentAdmissionManagementSystem",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Personal Projects
      </h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project" >
            
            <a href={project.demoLink} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            

            <div className="project-header">
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </a>
              <button
                className="description-toggle mobile-only"
                onClick={() => toggleDescription(project.id)}
                aria-label={
                  expandedProjects[project.id]
                    ? "Collapse description"
                    : "Expand description"
                }
              >
                {expandedProjects[project.id] ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </button>
            </div>

            {/* Desktop description - always visible */}
            <div className="project-description-desktop">
              <p>{project.description}</p>
            </div>

            {/* Mobile description - toggleable */}
            <div className="project-description-mobile">
              <div
                className={`project-description ${
                  expandedProjects[project.id] ? "expanded" : "collapsed"
                }`}
              >
                <p>
                  {project.description}
                  <br />
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="github-icon"
                  >
                    <span className="github-label-mobile">GitHub</span>
                  </a>
                  {project.demoLink !== project.githubLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                      <span className="github-label-mobile">View</span>
                    </a>
                  )}
                </p>
              </div>
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
