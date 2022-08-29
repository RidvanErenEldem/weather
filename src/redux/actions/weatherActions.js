import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getCurrentWeatherSucess(weather) {
  return { type: actionTypes.GET_CURRENT_WEATHER_SUCCESS, payload: weather };
}

export function getCurrentWeatherLoading() {
  return { type: actionTypes.GET_CURRENT_WEATHER_LOADING };
}

export function getCurrentWeatherFail(error) {
  return { type: actionTypes.GET_CURRENT_WEATHER_FAIL, payload: error };
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

export function getCurrentWeather() {
  return function (dispatch) {
    dispatch(getCurrentWeatherLoading());
    let apiKey = process.env.REACT_APP_KEY;
    let url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=Konya&aqi=no";
    axios
      .get(url)
      .then((response) => dispatch(getCurrentWeatherSucess(response.data)))
      .catch((error) => dispatch(getCurrentWeatherFail(error.message)));
  };
}
