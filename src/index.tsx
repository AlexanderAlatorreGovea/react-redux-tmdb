import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";

const START_UP_BOILER_PLATE = <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>;

ReactDOM.render(
  START_UP_BOILER_PLATE,
  document.getElementById("root")
);
