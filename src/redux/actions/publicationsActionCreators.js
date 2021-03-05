import * as constants from '../constants';

export const fetchAllPublications = () => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: '/api/publications',
    success: (response) => setAllPublications(response),
  },
});

export const createPublication = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/api/publications',
    data,
    success: (publication) => addPublication(publication),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const getPublicationById = (publicationId, onSuccess) => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: `/api/publications/${publicationId}`,
    postProcessSuccess: onSuccess,
  },
});

export const updatePublicationById = (
  publicationId,
  data,
  onSuccess,
  onError
) => ({
  type: constants.API,
  payload: {
    method: 'PUT',
    url: `/api/publications/${publicationId}`,
    data,
    success: (publicationId, data) => updatePublication(publicationId, data),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const deletePublicationById = (publicationId, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'DELETE',
    url: `/api/publications/${publicationId}`,
    success: () => removePublication(publicationId),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

const addPublication = (note) => ({
  type: constants.ADD_PUBLICATION,
  payload: note,
});

const setAllPublications = (data) => ({
  type: constants.SET_ALL_PUBLICATIONS,
  payload: data,
});

const updatePublication = (publicationId, data) => ({
  type: constants.UPDATE_PUBLICATION,
  payload: {
    publicationId,
    data,
  },
});

const removePublication = (publicationId) => ({
  type: constants.REMOVE_PUBLICATION,
  payload: publicationId,
});
