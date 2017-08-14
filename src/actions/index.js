import axios from 'axios';
const API_KEY = 'e3d7c78cdb33ed566b03b7528e8b24bd'; //https://home.openweathermap.org/api_keys
const endpoint = q =>
  `http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';
// export function _fetchWeather(city) {
//   const url = endpoint(`${city},us`);
//   const request = fetch(url, {
//     mode: 'no-cors',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(r => r.text().then(text => (text ? JSON.parse(text) : {})));
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }

export function fetchWeather(city) {
  const url = endpoint(`${city},us`);
  const request = axios.get(url).then(r => r.data);
  return { type: FETCH_WEATHER, payload: request };
}
