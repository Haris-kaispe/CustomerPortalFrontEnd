import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./actionTypes";

const INIT_STATE = {
  Login: {},
};

const LoginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        Login: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case LOGOUT:
      console.log("state:", state);
      return INIT_STATE;

    default:
      return state;
  }
};

export default LoginReducer;
