import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer";
import whichDayReducer from "./whichDayReducer";

const reducer = combineReducers({
  weatherReducer,
  whichDayReducer,
});

export default reducer;
