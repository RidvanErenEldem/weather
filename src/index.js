import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import storeConfiguration from "./redux/reducers/storeConfiguration";
import { Provider } from "react-redux";

const store = storeConfiguration();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
