import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../actions';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>
        {this.props.count}
      </button>
    );
  }
}

function mapStateToProps({ count }) {
  return { count };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);
