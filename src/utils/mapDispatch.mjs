/*
A mapDispatch function allows injection of the store's dispatch
method, enabling the creation of logic and functions that
dispatch actions from the component. If no mapDispatch function
is provided, the default behavior is to inject dispatch itself as
a prop so the component itself can dispatch actions. Otherwise,
the object returned by mapDispatch is also turned into props.
Since the most common use case is to wrap up action creators so
their returned actions are passed straight to dispatch, connect
allows an "object shorthand" syntax - an object full of action
creators can be passed instead of an actual mapDispatch function.
*/
import {
  setToCreated,
  setToClosed,
  setToDeleted,
  setToOpened,
  setToUpdated,
} from 'Actions';
// dispatchers
const toCreate = ({ dispatch }) => dispatch(setToCreated());
const toClose = ({ dispatch }) => dispatch(setToClosed());
const toDelete = ({ dispatch }) => dispatch(setToDeleted());
const toOpen = ({ dispatch }) => dispatch(setToOpened());
const toUpdate = ({ dispatch }) => dispatch(setToUpdated());

const mapDispatch = {
  toCreate,
  toClose,
  toDelete,
  toOpen,
  toUpdate,
};

export default mapDispatch;
