import * as xlovecam from './xlovecamApi';
import * as chaturbate from './chaturbateApi';
import * as stripchat from './stripchatApi';
import _ from 'lodash';

const CAM_APIS = {
  xlovecam,
  chaturbate,
  stripchat
};

export const getModels = async () => {
  try {
    const apiPromises = Object.values(CAM_APIS).map(api => api.getModels());
    const results = await Promise.all(apiPromises);
    
    const allModels = results.flat().map(model => ({
      ...model,
      source: model.source || 'xlovecam',
      category: model.category || 'regular',
      isFeatured: model.isFeatured || false,
      isPremium: model.isPremium || false,
      lastUpdated: Date.now()
    }));

    return _.orderBy(allModels, ['isFeatured', 'isPremium', 'views'], ['desc', 'desc', 'desc']);
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

export const getFeaturedModels = (models) => 
  models.filter(model => model.isFeatured);

export const getPremiumModels = (models) => 
  models.filter(model => model.isPremium);

export const getMostViewedModels = (models) => 
  _.orderBy(models, ['views'], ['desc']).slice(0, 10);

export const getModelsBySource = (models, source) => 
  models.filter(model => model.source === source);
