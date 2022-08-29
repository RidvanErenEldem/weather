import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "./index";
import thunk from "redux-thunk";

export default function storeConfiguration() {
  return configureStore({ reducer }, applyMiddleware(thunk));
}
