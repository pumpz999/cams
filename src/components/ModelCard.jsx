import React from 'react';
import '../styles/global.css';

const ModelCard = ({ model }) => {
  return (
    <div className="model-card">
      <img src={model.image} alt={model.nickname} />
      <div className="model-info">
        <h3>{model.nickname}</h3>
        <p>{model.country}</p>
        <div className="online-status">
          <span className="online-dot"></span> Online Now
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
