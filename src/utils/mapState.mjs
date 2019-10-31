// A mapState function is basically a specialized selector
// function, which always receives the entire state as one
// argument, may receive the wrapped component's own props as a
// second argument, and must always return an object. The
// returned object's contents are, per the name, turned into
// props for the wrapped component.

/**
 * @function mapState
 * @desc receives the entire state as one argument, may receive
 * the wrapped component's own props as a
 * second argument, and must always return an object.
 * @params state: required ownProps: optional
 * @returns an unmutated new state obj
 *
 */
const mapState = (state, ownProps) => {
  const mappedState = ownProps(state);
  return { ...mappedState };
  // return ({
  //   isModalOpen,
  //   clipboard,
  // });
};

export default mapState;
