import React, { Component } from 'react';
import Chart from '../components/Chart';
import { connect } from 'react-redux';
const getData = (cityData, weatherField) => {
  return cityData.list.map(({ main }) => main[weatherField]);
};
class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const { name } = cityData.city;
    return (
      <tr key={name + Date.now()}>
        <td>
          {name}
        </td>
        <td>
          <Chart
            data={getData(cityData, 'temp')}
            height={120}
            width={180}
            color="orange"
          />
        </td>
        <td>
          <Chart
            data={getData(cityData, 'pressure')}
            height={120}
            width={180}
            color="blue"
          />
        </td>
        <td>
          <Chart
            data={getData(cityData, 'humidity')}
            height={60}
            width={100}
            color="green"
          />
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
