import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./pages/store"; // Path to your store.js file
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
