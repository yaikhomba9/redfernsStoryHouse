// components/MissionCard.js
import React from 'react';

function MissionCard({ title, icon, children }) {
  return (
    <div className="mission-card">
      <h3>
        <i className={icon}></i> {title}
      </h3>
      {children}
    </div>
  );
}

export default MissionCard;