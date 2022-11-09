import { call, put, takeEvery } from "redux-saga/effects";

// OrderManagement Redux States
import {
  ADD_NEW_ORDER_MANAGEMENT,
  DELETE_ORDER_MANAGEMENT,
  GET_ORDER_MANAGEMENT,
  UPDATE_ORDER_MANAGEMENT,
  GET_ORDER_DETAILS,
} from "./actionTypes";

import {
  getOrderDetailsSuccess,
  getOrderDetailsFail,
  getOrderManagementSuccess,
  getOrderManagementFail,
  updateOrderManagementSuccess,
  updateOrderManagementFail,
  addNewOrderManagementFail,
  addNewOrderManagementSuccess,
  deleteOrderManagementSuccess,
  deleteOrderManagementFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
  addNewOrderManagement,
  deleteOrderManagement,
  getOrderManagement,
  updateOrderManagement,
} from "../../helpers/backend_helper";

function* fetchOrderManagement({ payload: rec }) {
  try {
    const response = yield call(getOrderManagement, rec);
    yield put(getOrderManagementSuccess(response));
  } catch (error) {
    yield put(getOrderManagementFail(error));
  }
}

function* fetchOrderDetails({ payload: rec }) {
  try {
    const response = yield call(getOrderManagement, rec);
    yield put(getOrderDetailsSuccess(response));
  } catch (error) {
    yield put(getOrderDetailsFail(error));
  }
}

function* onUpdateOrderManagement({ payload: rec }) {
  try {
    const response = yield call(updateOrderManagement, rec);
    yield put(updateOrderManagementSuccess(response));
  } catch (error) {
    yield put(updateOrderManagementFail(error));
  }
}

function* onAddNewOrderManagement({ payload: rec }) {
  try {
    const response = yield call(addNewOrderManagement, rec);

    yield put(addNewOrderManagementSuccess(response));
  } catch (error) {
    yield put(addNewOrderManagementFail(error));
  }
}

function* onDeleteOrderManagement({ payload: rec }) {
  try {
    const response = yield call(deleteOrderManagement, rec);
    yield put(deleteOrderManagementSuccess(response));
  } catch (error) {
    yield put(deleteOrderManagementFail(error));
  }
}

function* OrderManagementSaga() {
  yield takeEvery(GET_ORDER_MANAGEMENT, fetchOrderManagement);
  yield takeEvery(ADD_NEW_ORDER_MANAGEMENT, onAddNewOrderManagement);
  yield takeEvery(UPDATE_ORDER_MANAGEMENT, onUpdateOrderManagement);
  yield takeEvery(DELETE_ORDER_MANAGEMENT, onDeleteOrderManagement);
  yield takeEvery(GET_ORDER_DETAILS, fetchOrderDetails);
}

export default OrderManagementSaga;
