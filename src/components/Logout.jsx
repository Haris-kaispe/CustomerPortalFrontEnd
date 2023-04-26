import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { logoutUser } from "../store/actions";
import { useNavigate } from "react-router-dom";

//redux

const Logout = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("here");
    dispatch(logoutUser(navigate));
  }, [dispatch]);

  return <>""</>;
};

Logout.propTypes = {
  history: PropTypes.object
};

export default Logout;
