import {
  GET_TRANSACTION_HISTORY_SUCCESS,
  GET_TRANSACTION_HISTORY_FAIL,
  UPDATE_TRANSACTION_HISTORY_SUCCESS,
  UPDATE_TRANSACTION_HISTORY_FAIL,
  ADD_NEW_TRANSACTION_HISTORY_SUCCESS,
  ADD_NEW_TRANSACTION_HISTORY_FAIL,
  DELETE_TRANSACTION_HISTORY_SUCCESS,
  DELETE_TRANSACTION_HISTORY_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  TransactionHistorys: [],
};

const TransactionHistoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        TransactionHistorys: [...state.TransactionHistory, action.payload],
      };

    case ADD_NEW_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_TRANSACTION_HISTORY_SUCCESS:
      console.log("here in reducewr", action.payload);
      return action.payload
        ? {
            ...state,
            TransactionHistorys: action.payload,
          }
        : {
            ...state,
            TransactionHistorys: { message: "No Content Found" },
          };

    case GET_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        TransactionHistorys: state.TransactionHistory.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
      };

    case UPDATE_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        TransactionHistorys: state.TransactionHistory.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
      };

    case DELETE_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default TransactionHistoryReducer;
