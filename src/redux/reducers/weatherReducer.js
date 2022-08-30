import * as actionTypes from "../actions/actionTypes";
import defaultState from "./initialState";

const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_FORECAST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_WEATHER_FORECAST_SUCCESS:
      return {
        loading: false,
        weatherForecast: action.payload,
        error: "",
      };
    case actionTypes.GET_WEATHER_FORECAST_FAIL:
      return {
        loading: false,
        weatherForecast: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
