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
            <div className="education-details">
              <div className="detail-item">
                <span className="detail-label">Course:</span>
                <span className="detail-value">B.Tech in Computer Science & Engineering</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">College:</span>
                <span className="detail-value">D. Y. Patil College of Engineering and Technology</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Kolhapur, Maharashtra</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">CGPA:</span>
                <span className="detail-value">8.4/10</span>
              </div>
            </div>
            <p className="description">
              Currently pursuing Bachelor's degree with focus on software engineering, data structures, algorithms, and full-stack development. Strong academic performance with hands-on project experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 - May 2023"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <div className="education-details">
              <div className="detail-item">
                <span className="detail-label">Course:</span>
                <span className="detail-value">Diploma in Computer Engineering</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">College:</span>
                <span className="detail-value">Ashokrao Mane Polytechnic</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Vathar, Maharashtra</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Percentage:</span>
                <span className="detail-value">89%</span>
              </div>
            </div>
            <p className="description">
              Comprehensive foundation in computer engineering fundamentals, programming languages, and software development principles. Excellent academic achievement with strong technical skills.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
