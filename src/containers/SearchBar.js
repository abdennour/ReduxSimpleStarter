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
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              onChange={this.onChangeInput}
              value={this.state.term}
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
                Search!
              </button>
            </span>
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
