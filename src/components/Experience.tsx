import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Experience.scss'

function Experience() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2023 - Sep 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dattamsh Learning Solutions</h4>
            <p className="location">Belgaum, KA</p>
            <p>
              Collaborated with the development team to contribute to an ongoing web-based project. Gained practical experience in real-world software development and team-based workflows.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Revolution IT Solutions</h4>
            <p className="location">Kolhapur, MH</p>
            <p>
              Gained hands-on experience in frontend web development using JavaScript. Collaborated effectively with team members in a dynamic development environment and contributed to the enhancement and maintenance of an ongoing web application project.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
