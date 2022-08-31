import * as actionTypes from "./actionTypes";

export function changeSelectedDate(selectedDay) {
  return { type: actionTypes.CHANGE_SELECTED_DATE, payload: selectedDay };
}
