import {
<<<<<<< HEAD
  ADD_NEW_CONTACT,
  ADD_NEW_CONTACT_FAIL,
  ADD_NEW_CONTACT_SUCCESS,
  CLEAR_ALL_IMAGE,
  CLEAR_IMAGE,
  GET_ALL_CONTACT,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_SUCCESS,
  GET_CONTACT_DETAILS,
  GET_CONTACT_DETAILS_FAIL,
  GET_CONTACT_DETAILS_SUCCESS,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_IMAGE_SUCCESS
} from "./actionTypes";

export const addNewContact = (rec) => ({
  type: ADD_NEW_CONTACT,
  payload: rec
=======
  GET_HELP,
  GET_HELP_SUCCESS,
  GET_HELP_FAIL,
  UPDATE_HELP,
  UPDATE_HELP_SUCCESS,
  UPDATE_HELP_FAIL,
  ADD_NEW_HELP,
  ADD_NEW_HELP_SUCCESS,
  ADD_NEW_HELP_FAIL,
  DELETE_HELP_FAIL,
  DELETE_HELP_SUCCESS,
  DELETE_HELP,
  ADD_NEW_CONTACT,
  ADD_NEW_CONTACT_SUCCESS,
  ADD_NEW_CONTACT_FAIL,
} from "./actionTypes";

export const getHelp = (rec) => ({
  type: GET_HELP,
  payload: rec,
});

export const getHelpSuccess = (rec) => ({
  type: GET_HELP_SUCCESS,
  payload: rec,
});

export const getHelpFail = (error) => ({
  type: GET_HELP_FAIL,
  payload: error,
});

export const updateHelp = (rec) => ({
  type: UPDATE_HELP,
  payload: rec,
});

export const updateHelpSuccess = (rec) => ({
  type: UPDATE_HELP_SUCCESS,
  payload: rec,
});

export const updateHelpFail = (error) => ({
  type: UPDATE_HELP_FAIL,
  payload: error,
});

export const addNewHelp = (rec) => ({
  type: ADD_NEW_HELP,
  payload: rec,
});

export const addNewHelpSuccess = (rec) => ({
  type: ADD_NEW_HELP_SUCCESS,
  payload: rec,
});

export const addNewHelpFail = (error) => ({
  type: ADD_NEW_HELP_FAIL,
  payload: error,
});

export const deleteHelp = (rec) => ({
  type: DELETE_HELP,
  payload: rec,
});

export const deleteHelpSuccess = (rec) => ({
  type: DELETE_HELP_SUCCESS,
  payload: rec,
});

export const deleteHelpFail = (error) => ({
  type: DELETE_HELP_FAIL,
  payload: error,
});

export const addNewContact = (rec) => ({
  type: ADD_NEW_CONTACT,
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewContactSuccess = (rec) => ({
  type: ADD_NEW_CONTACT_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewContactFail = (error) => ({
  type: ADD_NEW_CONTACT_FAIL,
<<<<<<< HEAD
  payload: error
});

export const uploadImage = (rec) => ({
  type: UPLOAD_IMAGE,
  payload: rec
});

export const uploadImageSuccess = (rec) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: rec
});

export const uploadImageFail = (error) => ({
  type: UPLOAD_IMAGE_FAIL,
  payload: error
});

export const clearImage = (rec) => ({
  type: CLEAR_IMAGE,
  payload: rec
});

export const clearAllImage = (rec) => ({
  type: CLEAR_ALL_IMAGE,
  payload: rec
});

export const getAllContact = (rec) => ({
  type: GET_ALL_CONTACT,
  payload: rec
});

export const getAllContactSuccess = (rec) => ({
  type: GET_ALL_CONTACT_SUCCESS,
  payload: rec
});

export const getAllContactFail = (error) => ({
  type: GET_ALL_CONTACT_FAIL,
  payload: error
});

export const getContactDetails = (rec) => ({
  type: GET_CONTACT_DETAILS,
  payload: rec
});

export const getContactDetailsSuccess = (rec) => ({
  type: GET_CONTACT_DETAILS_SUCCESS,
  payload: rec
});

export const getContactDetailsFail = (error) => ({
  type: GET_CONTACT_DETAILS_FAIL,
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
