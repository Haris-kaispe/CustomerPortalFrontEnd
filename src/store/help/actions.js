import {
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
});

export const addNewContactSuccess = (rec) => ({
  type: ADD_NEW_CONTACT_SUCCESS,
  payload: rec,
});

export const addNewContactFail = (error) => ({
  type: ADD_NEW_CONTACT_FAIL,
  payload: error,
});
