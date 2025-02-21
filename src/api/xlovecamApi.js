import axios from 'axios';

const getSettings = () => {
  const settings = JSON.parse(localStorage.getItem('apiSettings') || '{}');
  return settings.xlovecam || {};
};

const getAuthParams = () => {
  const { affiliateId, secretKey } = getSettings();
  const timestamp = Math.floor(Date.now() / 1000);
  
  if (!affiliateId || !secretKey) {
    throw new Error('XloveCam credentials not configured');
  }

  return {
    authServiceId: '2',
    authItemId: affiliateId,
    authSecret: secretKey,
    timestamp: timestamp
  };
};

// ... rest of the xlovecamApi.js code ...
