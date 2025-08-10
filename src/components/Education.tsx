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
            date="Jun 2023 - Sep 2026"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">D. Y. Patil College of Engineering and Technology</h4>
            <p className="location">Kolhapur, Maharashtra</p>
            <p className="description">
              Currently pursuing Bachelor's degree with focus on software engineering, data structures, algorithms, and full-stack development. Strong academic performance with hands-on project experience. <strong>CGPA: 8.4/10</strong>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 - May 2023"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Ashokrao Mane Polytechnic</h4>
            <p className="location">Vathar, Maharashtra</p>
            <p className="description">
              Comprehensive foundation in computer engineering fundamentals, programming languages, and software development principles. Excellent academic achievement with strong technical skills. <strong>Percentage: 89%</strong>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2020"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Secondary School Certificate (SSC)</h3>
            <h4 className="vertical-timeline-element-subtitle">Kolhapur Public School</h4>
            <p className="location">Kolhapur, Maharashtra</p>
            <p className="description">
              Completed Secondary School Certificate (SSC), building foundational knowledge in core subjects.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
