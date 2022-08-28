import * as actionTypes from "../actions/actionTypes";
import defaultState from "./initialState";

const weatherReducer = (state = defaultState.currentWeather, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_WEATHER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
