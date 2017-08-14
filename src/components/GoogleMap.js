import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: this.props
    });
  }
  render() {
    return <div className="map" ref="map" />;
  }
}

export default GoogleMap;
