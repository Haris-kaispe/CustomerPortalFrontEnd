import {
<<<<<<< HEAD
  ADD_NEW_SALES_ORDER_LIST,
  ADD_NEW_SALES_ORDER_LIST_FAIL,
  ADD_NEW_SALES_ORDER_LIST_SUCCESS,
  CLEAR_SALES_ORDER_LIST,
  DELETE_SALES_ORDER_LIST,
  DELETE_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_SUCCESS,
  GET_SALES_ORDER_LIST,
  GET_SALES_ORDER_LIST_FAIL,
  GET_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_LIST,
  UPDATE_SALES_ORDER_LIST_FAIL,
  UPDATE_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_STATUS,
  UPDATE_SALES_ORDER_STATUS_FAIL,
  UPDATE_SALES_ORDER_STATUS_SUCCESS
=======
  GET_SALES_ORDER_LIST,
  GET_SALES_ORDER_LIST_SUCCESS,
  GET_SALES_ORDER_LIST_FAIL,
  UPDATE_SALES_ORDER_LIST,
  UPDATE_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_LIST_FAIL,
  ADD_NEW_SALES_ORDER_LIST,
  ADD_NEW_SALES_ORDER_LIST_SUCCESS,
  ADD_NEW_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_SUCCESS,
  DELETE_SALES_ORDER_LIST,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

export const getSalesOrderList = (rec) => ({
  type: GET_SALES_ORDER_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getSalesOrderListSuccess = (rec) => ({
  type: GET_SALES_ORDER_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getSalesOrderListFail = (error) => ({
  type: GET_SALES_ORDER_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateSalesOrderList = (rec) => ({
  type: UPDATE_SALES_ORDER_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateSalesOrderListSuccess = (rec) => ({
  type: UPDATE_SALES_ORDER_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateSalesOrderListFail = (error) => ({
  type: UPDATE_SALES_ORDER_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewSalesOrderList = (rec) => ({
  type: ADD_NEW_SALES_ORDER_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewSalesOrderListSuccess = (rec) => ({
  type: ADD_NEW_SALES_ORDER_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewSalesOrderListFail = (error) => ({
  type: ADD_NEW_SALES_ORDER_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteSalesOrderList = (rec) => ({
  type: DELETE_SALES_ORDER_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteSalesOrderListSuccess = (rec) => ({
  type: DELETE_SALES_ORDER_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteSalesOrderListFail = (error) => ({
  type: DELETE_SALES_ORDER_LIST_FAIL,
<<<<<<< HEAD
  payload: error
});

export const updateSalesOrderStatus = (rec) => ({
  type: UPDATE_SALES_ORDER_STATUS,
  payload: rec
});

export const updateSalesOrderStatusSuccess = (rec) => ({
  type: UPDATE_SALES_ORDER_STATUS_SUCCESS,
  payload: rec
});

export const updateSalesOrderStatusFail = (error) => ({
  type: UPDATE_SALES_ORDER_STATUS_FAIL,
  payload: error
});

export const clearSalesOrderList = () => ({
  type: CLEAR_SALES_ORDER_LIST
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
