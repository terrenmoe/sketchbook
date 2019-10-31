import React, { Component } from 'react';
import DataSource from 'actions';
/*
// The commented out classes are close enough that
// an HoC can be written to combine them.
//
// class CommentList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       // "DataSource" is some global data source
//       comments: DataSource.getComments(),
//     };
//   }
//
//   componentDidMount() {
//     // Subscribe to changes
//     DataSource.addChangeListener(this.handleChange);
//   }
//
//   componentWillUnmount() {
//     // Clean up listener
//     DataSource.removeChangeListener(this.handleChange);
//   }
//
//   handleChange() {
//     // Update component state whenever the data source changes
//     this.setState({
//       comments: DataSource.getComments(),
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.comments.map((comment) => (
//           <Comment comment={comment} key={comment.id} />
//         ))}
//       </div>
//     );
//   }
// }
//
// class BlogPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       blogPost: DataSource.getBlogPost(props.id)
//     };
//   }
//
//   componentDidMount() {
//     DataSource.addChangeListener(this.handleChange);
//   }
//
//   componentWillUnmount() {
//     DataSource.removeChangeListener(this.handleChange);
//   }
//
//   handleChange() {
//     this.setState({
//       blogPost: DataSource.getBlogPost(this.props.id)
//     });
//   }
//
//   render() {
//     return <TextBlock text={this.state.blogPost} />;
//   }
// }
*/

// These 2 components are made using the functional
// HoC withSketch which returns a composed component
// class based on the args given
// const divWithSketch = withSketch(
//   ,
//   (DataSource) => DataSource.getComments(),
// );
//
// const BlogPostWithSubscription = withSubscription(
//   BlogPost,
//   (DataSource, props) => DataSource.getBlogPost(props.id),
// );

/**
 * @func withSketch
 * @params
 *   @WrappedComponent canvas to be wrapped
 *   @selectData function called to handle state changes
 * @return class extending React.component
 */
export default function withSketch(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      const { data } = this.state;
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={data} {...this.props} />;
    }
  };
}
// Note that a HOC doesn’t modify the input component, nor does it use
// inheritance to copy its behavior. Rather, a HOC composes the
// original component by wrapping it in a container component. A HOC
// is a pure function with zero side-effects.
