import {
  GET_ORDER_MANAGEMENT,
  GET_ORDER_MANAGEMENT_SUCCESS,
  GET_ORDER_MANAGEMENT_FAIL,
  UPDATE_ORDER_MANAGEMENT,
  UPDATE_ORDER_MANAGEMENT_SUCCESS,
  UPDATE_ORDER_MANAGEMENT_FAIL,
  ADD_NEW_ORDER_MANAGEMENT,
  ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
  ADD_NEW_ORDER_MANAGEMENT_FAIL,
  DELETE_ORDER_MANAGEMENT_FAIL,
  DELETE_ORDER_MANAGEMENT_SUCCESS,
  DELETE_ORDER_MANAGEMENT,
  GET_ORDER_DETAILS,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
} from "./actionTypes";

export const getOrderDetails = (rec) => ({
  type: GET_ORDER_DETAILS,
  payload: rec,
});

export const getOrderDetailsSuccess = (rec) => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  payload: rec,
});

export const getOrderDetailsFail = (error) => ({
  type: GET_ORDER_DETAILS_FAIL,
  payload: error,
});

export const getOrderManagement = (rec) => ({
  type: GET_ORDER_MANAGEMENT,
  payload: rec,
});

export const getOrderManagementSuccess = (rec) => ({
  type: GET_ORDER_MANAGEMENT_SUCCESS,
  payload: rec,
});

export const getOrderManagementFail = (error) => ({
  type: GET_ORDER_MANAGEMENT_FAIL,
  payload: error,
});

export const updateOrderManagement = (rec) => ({
  type: UPDATE_ORDER_MANAGEMENT,
  payload: rec,
});

export const updateOrderManagementSuccess = (rec) => ({
  type: UPDATE_ORDER_MANAGEMENT_SUCCESS,
  payload: rec,
});

export const updateOrderManagementFail = (error) => ({
  type: UPDATE_ORDER_MANAGEMENT_FAIL,
  payload: error,
});

export const addNewOrderManagement = (rec) => ({
  type: ADD_NEW_ORDER_MANAGEMENT,
  payload: rec,
});

export const addNewOrderManagementSuccess = (rec) => ({
  type: ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
  payload: rec,
});

export const addNewOrderManagementFail = (error) => ({
  type: ADD_NEW_ORDER_MANAGEMENT_FAIL,
  payload: error,
});

export const deleteOrderManagement = (rec) => ({
  type: DELETE_ORDER_MANAGEMENT,
  payload: rec,
});

export const deleteOrderManagementSuccess = (rec) => ({
  type: DELETE_ORDER_MANAGEMENT_SUCCESS,
  payload: rec,
});

export const deleteOrderManagementFail = (error) => ({
  type: DELETE_ORDER_MANAGEMENT_FAIL,
  payload: error,
});
