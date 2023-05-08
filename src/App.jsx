import React from "react";
import PropTypes from "prop-types";
import SideMenu from "./layouts/side-menu/Main";
import { Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./router";
import Authmiddleware from "./router/route";

const App = (props) => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => {
          return (
            <Route
              key={idx}
              exact
              path={route.path}
              element={
                <Authmiddleware
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                  path={route.path}
                  exact
<<<<<<< HEAD
                  role=""
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                />
              }
            />
          );
        })}
        {authProtectedRoutes.map((route, idx) => {
          return (
            <Route path="/" key={idx} element={<SideMenu />}>
              <Route
                exact
                path={route.path}
                element={
                  <Authmiddleware
                    component={route.component}
                    isAuthProtected={true}
                    path={route.path}
<<<<<<< HEAD
                    role={route.role}
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                  />
                }
              />
            </Route>
          );
        })}
      </Routes>
    </React.Fragment>
  );
};

App.propTypes = {
<<<<<<< HEAD
  layout: PropTypes.any
=======
  layout: PropTypes.any,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

export default App;
