import {
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_MANAGEMENT_SUCCESS,
  GET_ORDER_MANAGEMENT_FAIL,
  UPDATE_ORDER_MANAGEMENT_SUCCESS,
  UPDATE_ORDER_MANAGEMENT_FAIL,
  ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
  ADD_NEW_ORDER_MANAGEMENT_FAIL,
  DELETE_ORDER_MANAGEMENT_SUCCESS,
  DELETE_ORDER_MANAGEMENT_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  orderManagements: [],
  orderDetailsState: {},
};

const OrderManagementReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetailsState: action.payload,
      };

    case GET_ORDER_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_NEW_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
        orderManagements: [...state.orderManagements, action.payload],
      };

    case ADD_NEW_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_ORDER_MANAGEMENT_SUCCESS:
      console.log("here in reducewr", action.payload);
      return action.payload
        ? {
            ...state,
            orderManagements: action.payload,
          }
        : {
            ...state,
            orderManagements: { message: "No Content Found" },
          };

    // return {
    //   ...state,
    //   orderManagements: action.payload,
    // };

    case GET_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
        orderManagements: state.orderManagements.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
      };

    case UPDATE_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
        orderManagements: state.orderManagements.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
      };

    case DELETE_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default OrderManagementReducer;
