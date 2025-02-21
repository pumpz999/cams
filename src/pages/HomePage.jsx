import React, { useState, useEffect } from 'react';
import { getModels } from '../api';
import ModelCard from '../components/ModelCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import ModelFilters from '../components/ModelFilters';
import ModelDetailsModal from '../components/ModelDetailsModal';
import ToastNotifications, { showErrorToast } from '../components/ToastNotifications';
import '../styles/global.css';

const HomePage = () => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [filters, setFilters] = useState({
    country: '',
    ageRange: [18, 99],
    onlineOnly: false,
    source: 'all'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const modelsData = await getModels({ limit: 50 });
        setModels(modelsData);
        setFilteredModels(modelsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        showErrorToast('Failed to load models');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    const filtered = models.filter(model => {
      const age = model.age || 0;
      const countryMatch = newFilters.country ? 
        (model.country || '').toLowerCase().includes(newFilters.country.toLowerCase()) : true;
      const ageMatch = age >= newFilters.ageRange[0] && age <= newFilters.ageRange[1];
      const onlineMatch = newFilters.onlineOnly ? model.is_online : true;
      const sourceMatch = newFilters.source === 'all' ? true : model.source === newFilters.source;
      
      return countryMatch && ageMatch && onlineMatch && sourceMatch;
    });
    setFilteredModels(filtered);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      <ToastNotifications />
      {error && <ErrorMessage message={error} />}
      
      <ModelFilters onFilter={handleFilter} />
      
      <div className="model-grid">
        {filteredModels.map(model => (
          <ModelCard 
            key={`${model.id}-${model.source}`}
            model={model} 
            onClick={() => setSelectedModel(model)}
          />
        ))}
      </div>
      
      {selectedModel && (
        <ModelDetailsModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
