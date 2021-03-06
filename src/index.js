import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import history from "../src/components/utils/History";

import ReactGA from "react-ga";

ReactGA.initialize("UA-126128355-1");

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

ReactDOM.render(
  <Router onUpdate={fireTracking} history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
