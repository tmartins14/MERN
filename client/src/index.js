import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import materalizeCSS from "materialize-css/dist/css/materialize.min.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const store = createStore(reducers, applyMiddleware());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
