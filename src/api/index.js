import * as xlovecam from './xlovecamApi';
import * as chaturbate from './chaturbateApi';
import * as stripchat from './stripchatApi';
import _ from 'lodash';

export const getModels = async (filters) => {
  try {
    const [xlovecamModels, chaturbateModels, stripchatModels] = await Promise.all([
      xlovecam.getModelList(filters),
      chaturbate.getModels(filters),
      stripchat.getModels(filters)
    ]);

    // Normalize and merge models from different APIs
    const normalizedModels = [
      ...xlovecamModels.map(model => ({
        ...model,
        source: 'XloveCam',
        is_online: model.is_online || false
      })),
      ...chaturbateModels.map(model => ({
        id: model.user_id,
        nickname: model.username,
        image: model.thumbnail,
        age: model.age,
        country: model.location,
        is_online: model.is_live,
        source: 'Chaturbate'
      })),
      ...stripchatModels.map(model => ({
        id: model.id,
        nickname: model.username,
        image: model.thumbnail,
        age: model.age,
        country: model.country,
        is_online: model.is_online,
        source: 'Stripchat'
      }))
    ];

    // Remove duplicates based on nickname and source
    return _.uniqBy(normalizedModels, model => `${model.nickname}-${model.source}`);
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

export const getModelDetails = async (modelId, source) => {
  try {
    switch (source) {
      case 'XloveCam':
        return await xlovecam.getModelProfile([modelId]);
      case 'Chaturbate':
        return await chaturbate.getModelDetails(modelId);
      case 'Stripchat':
        return await stripchat.getModelDetails(modelId);
      default:
        throw new Error('Invalid source');
    }
  } catch (error) {
    console.error('Error fetching model details:', error);
    throw error;
  }
};
