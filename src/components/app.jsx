import React, { Component } from 'react';
// import PropTypes from 'airbnb-prop-types';
import { Navbar, Sketch, Footer } from 'Components';

// @connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
        <Navbar />
        <Sketch {...this.props} />
        <Footer />
      </div>
    );
  }
}
