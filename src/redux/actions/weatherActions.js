import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getWeatherForecastSucess(weather) {
  return { type: actionTypes.GET_WEATHER_FORECAST_SUCCESS, payload: weather };
}

export function getWeatherForecastLoading() {
  return { type: actionTypes.GET_WEATHER_FORECAST_LOADING };
}

export function getWeatherForecastFail(error) {
  return { type: actionTypes.GET_WEATHER_FORECAST_FAIL, payload: error };
}

export function getWeatherForecast(query) {
  return function (dispatch) {
    dispatch(getWeatherForecastLoading());
    const options = {
      method: "GET",
      url: "https://ridvanereneldem.software:5000/weather",
      params: { location: query },
    };
    axios
      .request(options)
      .then((response) => dispatch(getWeatherForecastSucess(response.data)))
      .catch((error) => dispatch(getWeatherForecastFail(error.message)));
  };
}

// export function getCurrentWeather() {
//   return function (dispatch) {
//     let apiKey = process.env.REACT_APP_KEY;
//     let url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=Konya&aqi=no";
//     console.log(url);
//     return fetch(url)
//       .then((response) => response.json())
//       .then((response) => dispatch(getCurrentWeatherSucess(response)))
//       .catch(function (error) {
//         console.warn("Blame the API", error);
//       });
//   };
// }
