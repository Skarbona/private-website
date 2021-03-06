import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';

import "./sass/index.scss";
import { App } from "./components/App";
import { store } from "./store/store";

ReactGA.initialize('UA-24902683-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
