import {
<<<<<<< HEAD
  ADD_NEW_TRANSACTION_HISTORY_FAIL,
  ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
  DELETE_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_SUCCESS,
  EXPORT_TOTAL_TRANSACTIONS_FAIL,
  EXPORT_TOTAL_TRANSACTIONS_SUCCESS,
  GET_TRANSACTION_HISTORY_FAIL,
  GET_TRANSACTION_HISTORY_SUCCESS,
  SAVE_INVOICE_FILTERS,
  UPDATE_TRANSACTION_HISTORY_FAIL,
  UPDATE_TRANSACTION_HISTORY_SUCCESS
=======
  GET_TRANSACTION_HISTORY_SUCCESS,
  GET_TRANSACTION_HISTORY_FAIL,
  UPDATE_TRANSACTION_HISTORY_SUCCESS,
  UPDATE_TRANSACTION_HISTORY_FAIL,
  ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
  ADD_NEW_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_SUCCESS,
  DELETE_TRANSACTION_HISTORY_FAIL,
  EXPORT_TOTAL_TRANSACTIONS_SUCCESS,
  EXPORT_TOTAL_TRANSACTIONS_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

const INIT_STATE = {
  TransactionHistorys: [],
  totalTransactions: [],
<<<<<<< HEAD
  SavedDateRange: "",
  SavedPaymentId: "",
  SavedPaymentStatus: ""
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const TransactionHistoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        TransactionHistorys: [...state.TransactionHistory, action.payload]
=======
        TransactionHistorys: [...state.TransactionHistory, action.payload],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_NEW_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TRANSACTION_HISTORY_SUCCESS:
      return action.payload
        ? {
            ...state,
<<<<<<< HEAD
            TransactionHistorys: action.payload
          }
        : {
            ...state,
            TransactionHistorys: { message: "No Content Found" }
=======
            TransactionHistorys: action.payload,
          }
        : {
            ...state,
            TransactionHistorys: { message: "No Content Found" },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          };

    case GET_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        TransactionHistorys: state.TransactionHistory.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
<<<<<<< HEAD
        })
=======
        }),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        TransactionHistorys: state.TransactionHistory.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
<<<<<<< HEAD
        )
=======
        ),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };
    case DELETE_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case EXPORT_TOTAL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        totalTransactions: action.payload
=======
        totalTransactions: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case EXPORT_TOTAL_TRANSACTIONS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case SAVE_INVOICE_FILTERS:
      return {
        ...state,
        SavedDateRange: action.payload.dateRange,
        SavedPaymentId: action.payload.paymentId,
        SavedPaymentStatus: action.payload.paymentStatus
      };

=======
        error: action.payload,
      };
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    default:
      return state;
  }
};

export default TransactionHistoryReducer;
