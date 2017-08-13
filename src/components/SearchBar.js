import React, { Component } from 'react';

class SearchBar extends Component {
  state = { value: '' };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.onSearchTermChange(value);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.value}
          placeholder="Search.."
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchBar;
