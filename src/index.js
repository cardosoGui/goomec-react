import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import history from "../src/components/utils/History";

import ReactGA from "react-ga";
<<<<<<< HEAD

=======
>>>>>>> f11a08b58b216fc3dd9ff431bc989c4ec5183424
ReactGA.initialize("UA-126128355-1");

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

<<<<<<< HEAD
=======
ReactGA.timing({
  category: "JS Libraries",
  variable: "load",
  value: 20, // in milliseconds
  label: "CDN libs"
});

>>>>>>> f11a08b58b216fc3dd9ff431bc989c4ec5183424
ReactDOM.render(
  <Router onUpdate={fireTracking} history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
