import React from 'react';
import '../assets/styles/SectionSeparator.scss';

const SectionSeparator = () => {
  return (
    <div className="section-separator">
      <div className="separator-line">
        <div className="separator-dot"></div>
        <div className="separator-gradient"></div>
        <div className="separator-dot"></div>
      </div>
    </div>
  );
};

export default SectionSeparator;
