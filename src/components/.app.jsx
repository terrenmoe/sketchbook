@connect(mapStateToProps, mapDispatchToProps)

class App extends React.Component {
  render() {
    return (
      <div>
        Count: {this.props.counter}
      </div>
    );
  }
}
