import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/masterglaive">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
