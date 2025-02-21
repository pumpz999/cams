import React from 'react';
import '../styles/global.css';

const ModelCard = ({ model, onClick }) => {
  return (
    <div className="model-card" onClick={onClick}>
      <div className="model-image">
        <img src={model.image} alt={model.nickname} />
        <div className="source-badge">{model.source}</div>
      </div>
      <div className="model-info">
        <h3>{model.nickname}</h3>
        <p>{model.country}</p>
        <div className={`status ${model.is_online ? 'online' : 'offline'}`}>
          {model.is_online ? 'Online Now' : 'Offline'}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
