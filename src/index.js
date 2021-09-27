import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
