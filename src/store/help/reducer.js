import {
  GET_HELP_SUCCESS,
  GET_HELP_FAIL,
  UPDATE_HELP_SUCCESS,
  UPDATE_HELP_FAIL,
  ADD_NEW_HELP_SUCCESS,
  ADD_NEW_HELP_FAIL,
  DELETE_HELP_SUCCESS,
  DELETE_HELP_FAIL,
  ADD_NEW_CONTACT_SUCCESS,
  ADD_NEW_CONTACT_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  help: [],
  contact: {},
};

const HelpReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT_SUCCESS:
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };

    case ADD_NEW_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_NEW_HELP_SUCCESS:
      return {
        ...state,
        help: [...state.help, action.payload],
      };

    case ADD_NEW_HELP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_HELP_SUCCESS:
      return {
        ...state,
        help: action.payload,
      };

    case GET_HELP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_HELP_SUCCESS:
      return {
        ...state,
        help: state.help.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
      };

    case UPDATE_HELP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_HELP_SUCCESS:
      return {
        ...state,
        help: state.help.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
      };

    case DELETE_HELP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default HelpReducer;
