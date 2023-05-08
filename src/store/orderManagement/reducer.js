import {
<<<<<<< HEAD
  ADD_NEW_ORDER_MANAGEMENT_FAIL,
  ADD_NEW_ORDER_MANAGEMENT_SUCCESS,
  DELETE_ORDER_MANAGEMENT_FAIL,
  DELETE_ORDER_MANAGEMENT_SUCCESS,
  EXPORT_ALL_ORDERS_FAIL,
  EXPORT_ALL_ORDERS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_MANAGEMENT_FAIL,
  GET_ORDER_MANAGEMENT_SUCCESS,
  SAVE_FILTERS,
  UPDATE_ORDER_MANAGEMENT_FAIL,
  UPDATE_ORDER_MANAGEMENT_SUCCESS
=======
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
  EXPORT_ALL_ORDERS_SUCCESS,
  EXPORT_ALL_ORDERS_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

const INIT_STATE = {
  orderManagements: [],
  orderDetailsState: {},
  allOrders: [],
<<<<<<< HEAD
  SavedDateRange: "",
  SavedOrderId: "",
  SavedStatus: ""
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const OrderManagementReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        orderDetailsState: action.payload
=======
        orderDetailsState: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_ORDER_DETAILS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_NEW_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        orderManagements: []
        // orderManagements: [...state.orderManagements, action.payload]
=======
        orderManagements: [...state.orderManagements, action.payload],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_NEW_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_ORDER_MANAGEMENT_SUCCESS:
      return action.payload
        ? {
            ...state,
<<<<<<< HEAD
            orderManagements: action.payload
          }
        : {
            ...state,
            orderManagements: { message: "No Content Found" }
=======
            orderManagements: action.payload,
          }
        : {
            ...state,
            orderManagements: { message: "No Content Found" },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          };

    // return {
    //   ...state,
    //   orderManagements: action.payload,
    // };

    case GET_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
        orderManagements: state.orderManagements.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
<<<<<<< HEAD
        })
=======
        }),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_ORDER_MANAGEMENT_SUCCESS:
      return {
        ...state,
        orderManagements: state.orderManagements.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
<<<<<<< HEAD
        )
=======
        ),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_ORDER_MANAGEMENT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    // case EXPORT_ALL_ORDERS:
    //   return {};

    case EXPORT_ALL_ORDERS_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        allOrders: action.payload
=======
        allOrders: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case EXPORT_ALL_ORDERS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case SAVE_FILTERS:
      return {
        ...state,
        SavedDateRange: action.payload.SavedDateRange,
        SavedOrderId: action.payload.SavedOrderId,
        SavedStatus: action.payload.SavedStatus
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    default:
      return state;
  }
};

export default OrderManagementReducer;
