import * as actionTypes from "./actionTypes";

export function getCurrentWeatherSucess(weather) {
  return { type: actionTypes.GET_CURRENT_WEATHER_SUCCESS, payload: weather };
}

export function getCurrentWeather() {
  return function (dispatch) {
    let url = "http://api.weatherapi.com/v1/current.json?key=" + process.env.REACT_APP_API_KEY + "&q=Konya&aqi=no";
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentWeatherSucess(response)));
  };
}
