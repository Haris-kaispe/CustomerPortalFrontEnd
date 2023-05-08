import {
<<<<<<< HEAD
  ADD_NEW_TRANSACTION_HISTORY,
  ADD_NEW_TRANSACTION_HISTORY_FAIL,
  ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
  DELETE_TRANSACTION_HISTORY,
  DELETE_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_SUCCESS,
  EXPORT_TOTAL_TRANSACTIONS,
  EXPORT_TOTAL_TRANSACTIONS_FAIL,
  EXPORT_TOTAL_TRANSACTIONS_SUCCESS,
  GET_TRANSACTION_HISTORY,
  GET_TRANSACTION_HISTORY_FAIL,
  GET_TRANSACTION_HISTORY_SUCCESS,
  SAVE_INVOICE_FILTERS,
  UPDATE_TRANSACTION_HISTORY,
  UPDATE_TRANSACTION_HISTORY_FAIL,
  UPDATE_TRANSACTION_HISTORY_SUCCESS
=======
  GET_TRANSACTION_HISTORY,
  GET_TRANSACTION_HISTORY_SUCCESS,
  GET_TRANSACTION_HISTORY_FAIL,
  UPDATE_TRANSACTION_HISTORY,
  UPDATE_TRANSACTION_HISTORY_SUCCESS,
  UPDATE_TRANSACTION_HISTORY_FAIL,
  ADD_NEW_TRANSACTION_HISTORY,
  ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
  ADD_NEW_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_SUCCESS,
  DELETE_TRANSACTION_HISTORY,
  EXPORT_TOTAL_TRANSACTIONS,
  EXPORT_TOTAL_TRANSACTIONS_SUCCESS,
  EXPORT_TOTAL_TRANSACTIONS_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

export const getTransactionHistory = (rec) => ({
  type: GET_TRANSACTION_HISTORY,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getTransactionHistorySuccess = (rec) => ({
  type: GET_TRANSACTION_HISTORY_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getTransactionHistoryFail = (error) => ({
  type: GET_TRANSACTION_HISTORY_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateTransactionHistory = (rec) => ({
  type: UPDATE_TRANSACTION_HISTORY,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateTransactionHistorySuccess = (rec) => ({
  type: UPDATE_TRANSACTION_HISTORY_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateTransactionHistoryFail = (error) => ({
  type: UPDATE_TRANSACTION_HISTORY_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewTransactionHistory = (rec) => ({
  type: ADD_NEW_TRANSACTION_HISTORY,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewTransactionHistorySuccess = (rec) => ({
  type: ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewTransactionHistoryFail = (error) => ({
  type: ADD_NEW_TRANSACTION_HISTORY_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteTransactionHistory = (rec) => ({
  type: DELETE_TRANSACTION_HISTORY,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteTransactionHistorySuccess = (rec) => ({
  type: DELETE_TRANSACTION_HISTORY_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteTransactionHistoryFail = (error) => ({
  type: DELETE_TRANSACTION_HISTORY_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const exportTotalTransactions = (rec) => ({
  type: EXPORT_TOTAL_TRANSACTIONS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const exportTotalTransactionsSuccess = (rec) => ({
  type: EXPORT_TOTAL_TRANSACTIONS_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const exportTotalTransactionsFail = (error) => ({
  type: EXPORT_TOTAL_TRANSACTIONS_FAIL,
<<<<<<< HEAD
  payload: error
});

export const saveInvoiceFilters = (rec) => ({
  type: SAVE_INVOICE_FILTERS,
  payload: rec
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
