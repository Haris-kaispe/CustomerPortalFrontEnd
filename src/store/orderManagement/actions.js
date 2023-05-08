import {
<<<<<<< HEAD
  ADD_NEW_ORDER_MANAGEMENT,
  ADD_NEW_ORDER_MANAGEMENT_FAIL,
  ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
  DELETE_ORDER_MANAGEMENT,
  DELETE_ORDER_MANAGEMENT_FAIL,
  DELETE_ORDER_MANAGEMENT_SUCCESS,
  EXPORT_ALL_ORDERS,
  EXPORT_ALL_ORDERS_FAIL,
  EXPORT_ALL_ORDERS_SUCCESS,
  GET_ORDER_DETAILS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_MANAGEMENT,
  GET_ORDER_MANAGEMENT_FAIL,
  GET_ORDER_MANAGEMENT_SUCCESS,
  SAVE_FILTERS,
  UPDATE_ORDER_MANAGEMENT,
  UPDATE_ORDER_MANAGEMENT_FAIL,
  UPDATE_ORDER_MANAGEMENT_SUCCESS
=======
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
  EXPORT_ALL_ORDERS,
  EXPORT_ALL_ORDERS_SUCCESS,
  EXPORT_ALL_ORDERS_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

export const getAllOrders = (rec) => ({
  type: EXPORT_ALL_ORDERS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getAllOrdersSuccess = (rec) => ({
  type: EXPORT_ALL_ORDERS_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getAllOrdersFail = (error) => ({
  type: EXPORT_ALL_ORDERS_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderDetails = (rec) => ({
  type: GET_ORDER_DETAILS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderDetailsSuccess = (rec) => ({
  type: GET_ORDER_DETAILS_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderDetailsFail = (error) => ({
  type: GET_ORDER_DETAILS_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderManagement = (rec) => ({
  type: GET_ORDER_MANAGEMENT,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderManagementSuccess = (rec) => ({
  type: GET_ORDER_MANAGEMENT_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getOrderManagementFail = (error) => ({
  type: GET_ORDER_MANAGEMENT_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateOrderManagement = (rec) => ({
  type: UPDATE_ORDER_MANAGEMENT,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateOrderManagementSuccess = (rec) => ({
  type: UPDATE_ORDER_MANAGEMENT_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateOrderManagementFail = (error) => ({
  type: UPDATE_ORDER_MANAGEMENT_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewOrderManagement = (rec) => ({
  type: ADD_NEW_ORDER_MANAGEMENT,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewOrderManagementSuccess = (rec) => ({
  type: ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewOrderManagementFail = (error) => ({
  type: ADD_NEW_ORDER_MANAGEMENT_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteOrderManagement = (rec) => ({
  type: DELETE_ORDER_MANAGEMENT,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteOrderManagementSuccess = (rec) => ({
  type: DELETE_ORDER_MANAGEMENT_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteOrderManagementFail = (error) => ({
  type: DELETE_ORDER_MANAGEMENT_FAIL,
<<<<<<< HEAD
  payload: error
});

export const saveFilters = (rec) => ({
  type: SAVE_FILTERS,
  payload: rec
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
