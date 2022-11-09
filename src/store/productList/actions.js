import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_PRODUCT_LIST,
  UPDATE_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_NEW_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  DELETE_PRODUCT_LIST,
} from "./actionTypes";

export const getProductList = (rec) => ({
  type: GET_PRODUCT_LIST,
  payload: rec,
});

export const getProductListSuccess = (rec) => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  payload: rec,
});

export const getProductListFail = (error) => ({
  type: GET_PRODUCT_LIST_FAIL,
  payload: error,
});

export const updateProductList = (rec) => ({
  type: UPDATE_PRODUCT_LIST,
  payload: rec,
});

export const updateProductListSuccess = (rec) => ({
  type: UPDATE_PRODUCT_LIST_SUCCESS,
  payload: rec,
});

export const updateProductListFail = (error) => ({
  type: UPDATE_PRODUCT_LIST_FAIL,
  payload: error,
});

export const addNewProductList = (rec) => ({
  type: ADD_NEW_PRODUCT_LIST,
  payload: rec,
});

export const addNewProductListSuccess = (rec) => ({
  type: ADD_NEW_PRODUCT_LIST_SUCCESS,
  payload: rec,
});

export const addNewProductListFail = (error) => ({
  type: ADD_NEW_PRODUCT_LIST_FAIL,
  payload: error,
});

export const deleteProductList = (rec) => ({
  type: DELETE_PRODUCT_LIST,
  payload: rec,
});

export const deleteProductListSuccess = (rec) => ({
  type: DELETE_PRODUCT_LIST_SUCCESS,
  payload: rec,
});

export const deleteProductListFail = (error) => ({
  type: DELETE_PRODUCT_LIST_FAIL,
  payload: error,
});
