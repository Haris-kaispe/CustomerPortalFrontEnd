import {
  GET_SALES_ORDER_LIST_SUCCESS,
  GET_SALES_ORDER_LIST_FAIL,
  UPDATE_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_LIST_FAIL,
  ADD_NEW_SALES_ORDER_LIST_SUCCESS,
  ADD_NEW_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_SUCCESS,
  DELETE_SALES_ORDER_LIST_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  salesOrderLists: [],
};

const SalesOrderListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
        salesOrderLists: [...state.salesOrderLists, action.payload],
      };

    case ADD_NEW_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_SALES_ORDER_LIST_SUCCESS:
      console.log("here in reducewr", action.payload);
      return action.payload
        ? {
            ...state,
            salesOrderLists: action.payload,
          }
        : {
            ...state,
            salesOrderLists: { message: "No Content Found" },
          };

    // return {
    //   ...state,
    //   salesOrderLists: action.payload,
    // };

    case GET_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
        salesOrderLists: state.salesOrderLists.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
      };

    case UPDATE_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
        salesOrderLists: state.salesOrderLists.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
      };

    case DELETE_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default SalesOrderListReducer;
