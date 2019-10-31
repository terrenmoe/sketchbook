export const SET_UPDATE = 'SET_UPDATE';

export const setToUpdated = (isUpdating = false) => ({ type: SET_UPDATE, payload: isUpdating });
