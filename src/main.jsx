<<<<<<< HEAD
import "./assets/css/app.css";

import React, { StrictMode } from "react";

import App from "./App";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from "./store";

const root = createRoot(document.getElementById("root"));

const currentPath = document.location.pathname.split("/")[1];

const basename = currentPath;
root.render(
  <RecoilRoot>
    <Provider store={store}>
      <React.Fragment>
        <Router basename={basename}>
=======
import { createRoot } from "react-dom/client";
import App from "./App";
import React,{StrictMode} from "react";
import "./assets/css/app.css";
// import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter as Router } from "react-router-dom";
// import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import store from "./store";
import { RecoilRoot } from "recoil";


const root = createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Provider store={store}>
      
      <React.Fragment>
        <Router>
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          <App />
        </Router>
      </React.Fragment>
    </Provider>
  </RecoilRoot>
);
