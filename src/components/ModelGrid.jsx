import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';
import { getModels } from '../api';
import '../styles/ModelGrid.css';

const ModelGrid = ({ category, source }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchModels = async () => {
    try {
      const allModels = await getModels();
      let filteredModels = allModels;

      if (source) {
        filteredModels = allModels.filter(model => model.source === source);
      }

      switch (category) {
        case 'featured':
          filteredModels = filteredModels.filter(model => model.isFeatured);
          break;
        case 'premium':
          filteredModels = filteredModels.filter(model => model.isPremium);
          break;
        case 'most-viewed':
          filteredModels = filteredModels.sort((a, b) => b.views - a.views).slice(0, 10);
          break;
        default:
          break;
      }

      setModels(filteredModels);
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
    const interval = setInterval(fetchModels, 180000); // Refresh every 3 minutes
    return () => clearInterval(interval);
  }, [category, source]);

  if (loading) {
    return <div className="loading">Loading models...</div>;
  }

  return (
    <div className="model-grid">
      {models.map(model => (
        <ModelCard key={`${model.id}-${model.source}`} model={model} />
      ))}
    </div>
  );
};

export default ModelGrid;
