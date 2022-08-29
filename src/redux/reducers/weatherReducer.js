import * as actionTypes from "../actions/actionTypes";
import defaultState from "./initialState";

const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CURRENT_WEATHER_SUCCESS:
      return {
        loading: false,
        currentWeather: action.payload,
        error: "",
      };
    case actionTypes.GET_CURRENT_WEATHER_FAIL:
      return {
        loading: false,
        currentWeather: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
