// Because combineReducers expects an object, we can put all
// top-level reducers into a separate file, export each reducer
// function, and use import * as reducers to get them as an object
// with their names as the keys:
import { combineReducers } from 'redux';

import {
  SET_CREATE,
  SET_CLOSE,
  SET_DELETE,
  SET_OPEN,
  SET_UPDATE,
} from 'Actions';

import { INITIAL_STATE } from 'Store';

// reducer
export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CREATE:
      return ({
        ...state,
        isCreated: action.payload,
      });
    case SET_CLOSE:
      return ({
        ...state,
        isClosed: action.payload,
      });
    case SET_DELETE:
      return ({
        ...state,
        isDeleted: action.payload,
      });
    case SET_OPEN:
      return ({
        ...state,
        isOpened: action.payload,
      });
    case SET_UPDATE:
      return ({
        ...state,
        isUpdated: action.payload,
      });
    default:
      return state;
  }
}

/**
  function model(state, action) {
  switch (action.type) {
     case SET_OPEN:
        return Object.assign({}, state, {
          isOpen: action.payload
        })
     default:
        return state
   }
  }

  function model(state = iState, action) {
    switch (action.type) {
      case SET_OPEN:
        return ({
          ...state,
          isOpen: action.payload
        })
      default:
        return state
    }
  }
*/
