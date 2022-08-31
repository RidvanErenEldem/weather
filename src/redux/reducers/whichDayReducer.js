import * as actionTypes from "../actions/actionTypes";
import whichDayState from "./whichDayState";

const whichDayReducer = (state = whichDayState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SELECTED_DATE:
      return {
        selectedDay: action.payload,
      };
    default:
      return state;
  }
};

export default whichDayReducer;
