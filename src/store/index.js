import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';


// initial State
export const INITIAL_STATE = {
  isCreated: false,
  isClosed: true,
  isDeleted: false,
  isOpened: false,
  isUpdated: false,
};

/**
  import { createStore } from 'redux';
  import { INITIAL_STATE } from 'Store'
  let store = createStore(reducers, INITIAL_STATE);
 */
export default function configureStore(preloadedState = INITIAL_STATE) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

/**
const mapDispatchToProps = dispatch => ({
  onSetModalOpen(value) {
    dispatch(setModalOpen(value));
  }
});

connect(mapStateToProps, mapDispatchToProps)(App);

connect(
  mapStateToProps,
  {onSetModalOpen: setModalOpen}
)(App);

const mapStateToProps = state => ({
 isModalOpen: state.modal.isModalOpen,
 clipboard:  state.clipboard
});

const getModal = (state) => {
 return state.modal;
};

const getIsModalOpen = (state) => {
 return getModal(state).isOpen;
};

const mapStateToProps = (state) => ({
 isOpen: getIsOpen(state),
 clipboard:  getClipboard(state)
});

import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
*/

/**
 *
 * import { applyMiddleware, createStore } from 'redux';
 * import { logger } from 'redux-logger';
 *
 * const logger = createLogger({
 *   collapsed: (getState, action, logEntry) => !logEntry.error,
 *   predicate: (getState, action) =>
 *   action && action.type !== 'SET_LINES'
 * });
 *
 * const store = createStore(
 *   reducer,
 *   applyMiddleware(logger)
 * );
 */
