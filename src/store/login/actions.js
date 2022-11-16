import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./actionTypes";

export const Login = (rec) => ({
  type: LOGIN,
  payload: rec,
});

export const LoginSuccess = (rec) => ({
  type: LOGIN_SUCCESS,
  payload: rec,
});

export const LoginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const Logout = () => ({
  type: LOGOUT,
});
