export const SET_CLOSE = 'SET_CLOSE';

export const setToClosed = (isClosing = true) => ({ type: SET_CLOSE, payload: isClosing });
