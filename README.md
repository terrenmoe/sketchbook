# sketchbook
sketchbook with react and redux
The main features:
React canvas components connected to a Redux store.
Modular Sketch design for creating, opening, updating, deleting and closing individual Sketches using Redux Actions dispatched, reduced,

Lifecycle methods and the order in which they are called.
As of React 16 (release September 2017), there is an error
handling lifecycle method that you can use to catch exceptions
inside your components.

  Mounting:
    constructor()
    componentWillMount()
    render()
    componentDidMount()
  Updating:
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()
  Unmounting:
    componentWillUnmount()
  Error handling (since React 16):
    componentDidCatch()

import "redux" is an obj & can be destructed into the following:
  applyMiddleware
  bindActionCreators
  combineReducers
  compose
  createStore

import "react-redux" is an obj & can be destructed into the following:
  .Provider // A component which wraps
  .ReactReduxContext
  .batch
  .connect
  .connectAdvanced
  .shallowEqual
  .useDispatch
  .useSelector
  .useStore

The Flux pattern
  Manages the data flow of your app in 4 parts:

The Views:
  Subscribes to Store w/ subscribe() method
  Passes Actions to Reducers func w/ dispatch() method
  Calls store.dispatch(action)
  Uses connect() prevents unnecessary re-renders
  Ex.

    export default connect(
      // defines how to convert state to props in component
      mapStateToProps,

      // defines actions able to triggered in component
      mapDispatchToProps
    )(App);

The Actions:
  Are
    JS objects
  Have
    A "type" prop w/ constant string values
  Passes

  Passed
    To Reducers from Views by dispatch()

Reducers specify how the application's state changes in response
to actions sent to the store. Remember that actions only describe
what happened, but don't describe how the application's state
changes.
The Reducers:
  Are
    Pure functions which copy, modify, and then return new state
    Separate files combined w/ combineReducers() to createStore()
  Have
    Switch statements for Reducers to compile new state obj
    Case statements for Actions to modify compiled props
    Default statements in switch to return new state w/ obj spread
  Aren't
    Mutating its arguments
    Performing side effects like API calls, routing transitions
    Calling non-pure functions, like Date.now() or Math.random()
  Passed
    Actions from Views for each dispatch()
  Passes
    Reduced state to Store

The Store:
  Instantiated from import of "redux" w/ createStore()
  Instantiated with combined Reducer func and initial state args
  Holds application state
  Allows access to state via getState()
  Allows state to be updated via dispatch(action)
  Registers listeners via subscribe(listener)
  Handles unregistering of listeners via the function returned by
  subscribe(listener).
  The store calls reducer func from it's instantiation and passes two args to the reducer:
    the current state tree
    the action.
  Stores changes and the subscribed Views follow

testing
  If you are using ES6 in your application source, but write your
  tests in ES5, you should know that Babel handles the
  interchangeable use of ES6 import and CommonJS require through
  its interop capability to run two module formats side-by-side,
  but the behavior is slightly different. If you add a second
  export beside your default export, you can no longer import the
  default using require('./App'). Instead you have to use
  require('./App').default.
