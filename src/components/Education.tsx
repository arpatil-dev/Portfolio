import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2023 - Sep 2026"
            iconStyle={{ background: '#ff6b6b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">D. Y. Patil College of Engineering and Technology</h4>
            <p className="location">Kolhapur, Maharashtra</p>
            <p className="grade">CGPA: 8.4/10</p>
            <p>
              Currently pursuing Bachelor's degree with focus on software engineering, data structures, algorithms, and full-stack development. Strong academic performance with hands-on project experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 - May 2023"
            iconStyle={{ background: '#ff6b6b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Ashokrao Mane Polytechnic</h4>
            <p className="location">Vathar, Maharashtra</p>
            <p className="grade">Percentage: 89%</p>
            <p>
              Comprehensive foundation in computer engineering fundamentals, programming languages, and software development principles. Excellent academic achievement with strong technical skills.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
