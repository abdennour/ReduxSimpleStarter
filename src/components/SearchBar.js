import React, { Component } from 'react';

class SearchBar extends Component {
  state = { value: '' };
  render() {
    return (
      <input
        value={this.state.value}
        placeholder="Search.."
        onChange={({ target }) => this.setState({ value: target.value })}
      />
    );
  }
}

export default SearchBar;
