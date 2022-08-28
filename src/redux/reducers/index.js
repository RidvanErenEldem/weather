import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer";

const reducer = combineReducers({
  weatherReducer,
});

export default reducer;
