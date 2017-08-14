import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
class BookList extends Component {
  render() {
    return (
      <div className="list-group">
        {this.props.books.map(book =>
          <li
            className="list-group-item"
            key={book.title}
            onClick={() => this.props.selectBook(book)}
          >
            {book.title}
          </li>
        )}
      </div>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
