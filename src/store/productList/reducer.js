import {
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_NEW_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  DELETE_PRODUCT_LIST_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  productList: [],
};

const ProductListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };

    case ADD_NEW_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_PRODUCT_LIST_SUCCESS:
      console.log("here in reducewr", action.payload);
      return action.payload
        ? {
            ...state,
            productList: action.payload,
          }
        : {
            ...state,
            productList: { message: "No Content Found" },
          };
    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: state.productList.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
      };

    case UPDATE_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: state.productList.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
      };

    case DELETE_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ProductListReducer;
