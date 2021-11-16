import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/store";

import "./index.css";

const START_UP_BOILER_PLATE = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(START_UP_BOILER_PLATE, document.getElementById("root"));
