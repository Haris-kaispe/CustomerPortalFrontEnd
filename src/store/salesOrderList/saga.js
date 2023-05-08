<<<<<<< HEAD
=======
import { call, put, takeEvery } from "redux-saga/effects";

// SalesOrderList Redux States
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
import {
  ADD_NEW_SALES_ORDER_LIST,
  DELETE_SALES_ORDER_LIST,
  GET_SALES_ORDER_LIST,
  UPDATE_SALES_ORDER_LIST,
<<<<<<< HEAD
  UPDATE_SALES_ORDER_STATUS
} from "./actionTypes";
import {
=======
} from "./actionTypes";
import {
  getSalesOrderListSuccess,
  getSalesOrderListFail,
  updateSalesOrderListSuccess,
  updateSalesOrderListFail,
  addNewSalesOrderListFail,
  addNewSalesOrderListSuccess,
  deleteSalesOrderListSuccess,
  deleteSalesOrderListFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  addNewSalesOrderList,
  deleteSalesOrderList,
  getSalesOrderList,
  updateSalesOrderList,
<<<<<<< HEAD
  updateSalesOrderStatus
} from "../../helpers/backend_helper";
import {
  addNewSalesOrderListFail,
  addNewSalesOrderListSuccess,
  deleteSalesOrderListFail,
  deleteSalesOrderListSuccess,
  getSalesOrderListFail,
  getSalesOrderListSuccess,
  updateSalesOrderListFail,
  updateSalesOrderListSuccess,
  updateSalesOrderStatusFail,
  updateSalesOrderStatusSuccess
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

// SalesOrderList Redux States

//Include Both Helper File with needed methods
=======
} from "../../helpers/backend_helper";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

function* fetchSalesOrderList({ payload: rec }) {
  try {
    const response = yield call(getSalesOrderList, rec);
    yield put(getSalesOrderListSuccess(response));
  } catch (error) {
    yield put(getSalesOrderListFail(error));
  }
}

function* onUpdateSalesOrderList({ payload: rec }) {
  try {
    const response = yield call(updateSalesOrderList, rec);
    yield put(updateSalesOrderListSuccess(response));
  } catch (error) {
    yield put(updateSalesOrderListFail(error));
  }
}

function* onAddNewSalesOrderList({ payload: rec }) {
  try {
    const response = yield call(addNewSalesOrderList, rec);

    yield put(addNewSalesOrderListSuccess(response));
  } catch (error) {
    yield put(addNewSalesOrderListFail(error));
  }
}

function* onDeleteSalesOrderList({ payload: rec }) {
  try {
    const response = yield call(deleteSalesOrderList, rec);
    yield put(deleteSalesOrderListSuccess(response));
  } catch (error) {
    yield put(deleteSalesOrderListFail(error));
  }
}

<<<<<<< HEAD
function* onUpdateSalesOrderStatus({ payload: rec }) {
  try {
    const response = yield call(updateSalesOrderStatus, rec);
    yield put(updateSalesOrderStatusSuccess(rec));
  } catch (error) {
    yield put(updateSalesOrderStatusFail(error));
  }
}

=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
function* SalesOrderListSaga() {
  yield takeEvery(GET_SALES_ORDER_LIST, fetchSalesOrderList);
  yield takeEvery(ADD_NEW_SALES_ORDER_LIST, onAddNewSalesOrderList);
  yield takeEvery(UPDATE_SALES_ORDER_LIST, onUpdateSalesOrderList);
  yield takeEvery(DELETE_SALES_ORDER_LIST, onDeleteSalesOrderList);
<<<<<<< HEAD
  yield takeEvery(UPDATE_SALES_ORDER_STATUS, onUpdateSalesOrderStatus);
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
}

export default SalesOrderListSaga;
