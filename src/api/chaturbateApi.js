import axios from 'axios';

const getSettings = () => {
  const settings = JSON.parse(localStorage.getItem('apiSettings') || '{}');
  return settings.chaturbate || {};
};

export const getModels = async (params = {}) => {
  const { apiKey } = getSettings();
  
  if (!apiKey) {
    throw new Error('Chaturbate API key not configured');
  }

  try {
    const response = await axios.get('https://chaturbate.com/api/public/chatrooms', {
      params: {
        ...params,
        api_key: apiKey
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Chaturbate models:', error);
    throw error;
  }
};

// ... rest of the chaturbateApi.js code ...
