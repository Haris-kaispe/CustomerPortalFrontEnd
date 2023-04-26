import {
  ADD_NEW_TRANSACTION_HISTORY,
  DELETE_TRANSACTION_HISTORY,
  EXPORT_TOTAL_TRANSACTIONS,
  GET_TRANSACTION_HISTORY,
  UPDATE_TRANSACTION_HISTORY
} from "./actionTypes";
import {
  addNewTransactionHistory,
  deleteTransactionHistory,
  getAllTransaction,
  getOrderManagement,
  updateTransactionHistory
} from "../../helpers/backend_helper";
import {
  addNewTransactionHistoryFail,
  addNewTransactionHistorySuccess,
  deleteTransactionHistoryFail,
  deleteTransactionHistorySuccess,
  exportTotalTransactionsFail,
  exportTotalTransactionsSuccess,
  getTransactionHistoryFail,
  getTransactionHistorySuccess,
  updateTransactionHistoryFail,
  updateTransactionHistorySuccess
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

// TransactionHistory Redux States

//Include Both Helper File with needed methods

function* fetchTransactionHistory({ payload: rec }) {
  try {
    const response = yield call(getOrderManagement, rec);
    yield put(getTransactionHistorySuccess(response));
  } catch (error) {
    yield put(getTransactionHistoryFail(error));
  }
}

function* onUpdateTransactionHistory({ payload: rec }) {
  try {
    const response = yield call(updateTransactionHistory, rec);
    yield put(updateTransactionHistorySuccess(response));
  } catch (error) {
    yield put(updateTransactionHistoryFail(error));
  }
}

function* onAddNewTransactionHistory({ payload: rec }) {
  try {
    const response = yield call(addNewTransactionHistory, rec);

    yield put(addNewTransactionHistorySuccess(response));
  } catch (error) {
    yield put(addNewTransactionHistoryFail(error));
  }
}

function* onDeleteTransactionHistory({ payload: rec }) {
  try {
    const response = yield call(deleteTransactionHistory, rec);
    yield put(deleteTransactionHistorySuccess(response));
  } catch (error) {
    yield put(deleteTransactionHistoryFail(error));
  }
}

function* fetchAllTransactions({ payload: rec }) {
  try {
    const response = yield call(getAllTransaction, rec);
    yield put(exportTotalTransactionsSuccess(response));
  } catch (error) {
    yield put(exportTotalTransactionsFail(error));
  }
}

function* TransactionHistorySaga() {
  yield takeEvery(GET_TRANSACTION_HISTORY, fetchTransactionHistory);
  yield takeEvery(ADD_NEW_TRANSACTION_HISTORY, onAddNewTransactionHistory);
  yield takeEvery(UPDATE_TRANSACTION_HISTORY, onUpdateTransactionHistory);
  yield takeEvery(DELETE_TRANSACTION_HISTORY, onDeleteTransactionHistory);
  yield takeEvery(EXPORT_TOTAL_TRANSACTIONS, fetchAllTransactions);
}

export default TransactionHistorySaga;
