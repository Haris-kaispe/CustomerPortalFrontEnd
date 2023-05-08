import {
<<<<<<< HEAD
  ADD_NEW_CONTACT_FAIL,
  ADD_NEW_CONTACT_SUCCESS,
  CLEAR_ALL_IMAGE,
  CLEAR_IMAGE,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_SUCCESS,
  GET_CONTACT_DETAILS_FAIL,
  GET_CONTACT_DETAILS_SUCCESS,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_IMAGE_SUCCESS
} from "./actionTypes";

const INIT_STATE = {
  contacts: {},
  contact: {},
  urls: [],
  error: null,
  loading: false
=======
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
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const HelpReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        contact: [...state.contact, action.payload]
=======
        contact: [...state.contact, action.payload],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_NEW_CONTACT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case UPLOAD_IMAGE:
      return {
        ...state,
        loading: true,
        error: null,
        urls: null
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        urls: action.payload,
        loading: false,
        error: null
      };

    case UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CLEAR_IMAGE:
      const urls = state.urls;

      if (urls.length > 0) {
        urls.filter((url) => url.filename.indexOf(action.payload) === -1);
      }
      return {
        ...state,
        urls
      };

    case CLEAR_ALL_IMAGE:
      return {
        ...state,
        urls: []
      };

    case GET_ALL_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload
      };

    case GET_ALL_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contact: action.payload
      };

    case GET_CONTACT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contact: action.payload
      };

    case GET_CONTACT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload
=======
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
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    default:
      return state;
  }
};

export default HelpReducer;
