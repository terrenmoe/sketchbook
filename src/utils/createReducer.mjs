/**
 * @function createReducer
 * @desc a function for reducer creating
 * @params initialState handlers
 *  @initialState default param for returned reducer function
 *  @handlers function called if check returns true for
 *  Object.prototype.hasOwnProperty.call(handlers, action.type)
 * @return reducer function
 */
export default function createReducer(initialState, handlers) {
  const { hasOwnProperty } = Object.prototype;
  /**
   * @function reducer
   * @desc a reducer function to be passed to createStore()
   * called to determine new state in response to state actions dispatched
   * @params state action
   *  @state the current state tree
   *  @action the action obj dispatched w/ type string prop
   *  @return new state obj returned from call to
   *  handlers[action.type]() method w/ state and action as args if
   *  handlers[action.type] is a prop of handlers otherwise
   *  return state as passed to the reducer function.
   */
  return function reducer(state = initialState, action) {
    if (hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
