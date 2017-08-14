import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div className="col-lg-8">
        {this.props.book && JSON.stringify(this.props.book)}
      </div>
    );
  }
}

function mapStateToProps({ activeBook }) {
  return { book: activeBook };
}
export default connect(mapStateToProps)(BookDetail);
