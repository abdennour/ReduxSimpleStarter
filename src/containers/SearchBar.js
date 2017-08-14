import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
class SearchBar extends Component {
  state = { term: '' };
  onChangeInput = ({ target }) => {
    this.setState({ term: target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <div class="col-lg-6">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">
                Search!
              </button>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search for..."
              onChange={this.onChangeInput}
              value={this.state.term}
            />
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
