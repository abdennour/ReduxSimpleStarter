import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';
const getData = (cityData, weatherField) => {
  return cityData.list.map(({ main }) => main[weatherField]);
};
class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const { name } = cityData.city;
    const temps = getData(cityData, 'temp');
    return (
      <tr key={name + Date.now()}>
        <td>
          {name}
        </td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
