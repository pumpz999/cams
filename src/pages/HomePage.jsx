import React, { useState, useEffect } from 'react';
import ModelCard from '../components/ModelCard';
import Loading from '../components/Loading';
import '../styles/global.css';

const HomePage = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockModels = [
            {
              id: 1,
              nickname: 'Lola',
              country: 'Brazil',
              image: 'https://source.unsplash.com/random/300x300?woman'
            },
            {
              id: 2,
              nickname: 'Mia',
              country: 'USA',
              image: 'https://source.unsplash.com/random/300x300?model'
            },
            {
              id: 3,
              nickname: 'Sophia',
              country: 'France',
              image: 'https://source.unsplash.com/random/300x300?girl'
            },
            {
              id: 4,
              nickname: 'Emma',
              country: 'Germany',
              image: 'https://source.unsplash.com/random/300x300?lady'
            }
          ];
          setModels(mockModels);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching models:', error);
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      <div className="model-grid">
        {models.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
