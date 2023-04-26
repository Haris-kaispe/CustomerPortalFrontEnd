import { createRoot } from "react-dom/client";
import App from "./App";
import React, { StrictMode } from "react";
import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root"));

const currentPath = document.location.pathname.split("/")[1]; 


const basename = currentPath;

root.render(
  <RecoilRoot>
    <Provider store={store}>
      <React.Fragment>
        <Router basename={basename}>
          <App />
        </Router>
      </React.Fragment>
    </Provider>
  </RecoilRoot>
);