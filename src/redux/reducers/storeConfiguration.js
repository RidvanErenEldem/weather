import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";

export default function storeConfiguration() {
  return configureStore({ reducer });
}
