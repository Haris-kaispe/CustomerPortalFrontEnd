import {
<<<<<<< HEAD
  ADD_NEW_SALES_ORDER_LIST_FAIL,
  ADD_NEW_SALES_ORDER_LIST_SUCCESS,
  CLEAR_SALES_ORDER_LIST,
  DELETE_SALES_ORDER_LIST,
  DELETE_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_SUCCESS,
  GET_SALES_ORDER_LIST,
  GET_SALES_ORDER_LIST_FAIL,
  GET_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_LIST_FAIL,
  UPDATE_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_STATUS,
  UPDATE_SALES_ORDER_STATUS_FAIL,
  UPDATE_SALES_ORDER_STATUS_SUCCESS
=======
  GET_SALES_ORDER_LIST_SUCCESS,
  GET_SALES_ORDER_LIST_FAIL,
  UPDATE_SALES_ORDER_LIST_SUCCESS,
  UPDATE_SALES_ORDER_LIST_FAIL,
  ADD_NEW_SALES_ORDER_LIST_SUCCESS,
  ADD_NEW_SALES_ORDER_LIST_FAIL,
  DELETE_SALES_ORDER_LIST_SUCCESS,
  DELETE_SALES_ORDER_LIST_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

const INIT_STATE = {
  salesOrderLists: [],
<<<<<<< HEAD
  updated: false,
  deleted: false
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const SalesOrderListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        salesOrderLists: [...state.salesOrderLists, action.payload]
=======
        salesOrderLists: [...state.salesOrderLists, action.payload],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_NEW_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case GET_SALES_ORDER_LIST:
      return {
        ...state,
        updated: false,
        deleted: false
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_SALES_ORDER_LIST_SUCCESS:
      return action.payload
        ? {
            ...state,
<<<<<<< HEAD
            salesOrderLists: action.payload
          }
        : {
            ...state,
            salesOrderLists: { message: "No Content Found" }
=======
            salesOrderLists: action.payload,
          }
        : {
            ...state,
            salesOrderLists: { message: "No Content Found" },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          };

    // return {
    //   ...state,
    //   salesOrderLists: action.payload,
    // };

    case GET_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
        salesOrderLists: state.salesOrderLists.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
<<<<<<< HEAD
        })
=======
        }),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case DELETE_SALES_ORDER_LIST:
      return {
        ...state,
        deleted: false
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_SALES_ORDER_LIST_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        deleted: true

        // salesOrderLists: state.salesOrderLists.filter(
        //   (data) => data.code.toString() !== action.payload.data.code.toString()
        // )
=======
        salesOrderLists: state.salesOrderLists.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_SALES_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
<<<<<<< HEAD
        deleted: false
      };

    case UPDATE_SALES_ORDER_STATUS:
      return {
        ...state,
        updated: false
      };

    case UPDATE_SALES_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        updated: true
      };

    case UPDATE_SALES_ORDER_STATUS_FAIL:
      return {
        ...state,
        error: action.payload,
        updated: false
      };

    case CLEAR_SALES_ORDER_LIST:
      return {
        ...state,
        salesOrderLists: []
      };

    // salesOrderLists: state.salesOrderLists.docs.map((data) => {

=======
      };

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    default:
      return state;
  }
};

export default SalesOrderListReducer;
