export const SET_DELETE = 'SET_DELETE';

export const setToDeleted = (isDeleting = false) => ({ type: SET_DELETE, payload: isDeleting });
