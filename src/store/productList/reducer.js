<<<<<<< HEAD
import "toastr/build/toastr.min.css";

import {
  ADD_NEW_PRODUCT_LIST,
  ADD_NEW_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_PRODUCT_IMAGES,
  CLEAR_SINGLE_IMAGE,
  DELETE_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_SUCCESS,
  QUANTITY_CHANGE,
  RESET_STATUS,
  UPDATE_PRODUCT_LIST,
  UPDATE_PRODUCT_LIST_FAIL,
  UPDATE_PRODUCT_LIST_SUCCESS,
  UPLOAD_PRODUCT_IMAGE,
  UPLOAD_PRODUCT_IMAGE_FAIL,
  UPLOAD_PRODUCT_IMAGE_SUCCESS
} from "./actionTypes";

import toastr from "toastr";

// function to get the cart from local storage
const getCart = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
=======
import {
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_NEW_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  DELETE_PRODUCT_LIST_FAIL,
  QUANTITY_CHANGE,
  CLEAR_CART,
  ADD_TO_CART,
} from "./actionTypes";

import toastr from "toastr";
import "toastr/build/toastr.min.css";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

const INIT_STATE = {
  productList: {},
  QuantityofEachProduct: [],
<<<<<<< HEAD
  loading: false,
  error: null,
  added: false,
  updated: false,
  deleted: false,
  uploaded: false,
  imageUrls: [],
  imageLoading: false,
  imageError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const ProductListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case ADD_NEW_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
        added: false
      };

    case ADD_NEW_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        added: true
      };

    case ADD_NEW_PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        added: false,
        error: action.payload
      };

    case UPLOAD_PRODUCT_IMAGE:
      return {
        ...state,
        imageLoading: true,
        uploaded: false
      };

    case UPLOAD_PRODUCT_IMAGE_SUCCESS:
      if (Array.isArray(action.payload) && action.payload[0]?.filename) {
        return {
          ...state,
          imageLoading: false,
          imageUrls: state.imageUrls.concat(action.payload),
          uploaded: true
        };
        // let imageUrls = state.imageUrls;
        // imageUrls.push(action.payload);
        // return {
        //   ...state,
        //   imageLoading: false,
        //   imageUrls: imageUrls,
        //   uploaded: true
        // };
      } else {
        return {
          ...state,
          imageLoading: false,
          imageError: action.payload,
          uploaded: false
        };
      }

    case UPLOAD_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        imageLoading: false,
        imageError: action.payload,
        uploaded: false
=======
    case ADD_NEW_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: [...state.productList, action.payload],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case QUANTITY_CHANGE:
      let cartRecord = state.QuantityofEachProduct;

      const recIndex = cartRecord.findIndex((t) => t._id == action.payload.record._id);

      if (recIndex == -1) {
        if (action.payload.action === "increment") {
          let rec = action.payload.record;
          rec["addToCart"] = 1;
          cartRecord.push(rec);
        } else if (action.payload.action === "input") {
          // if (action.payload.value > 0) {
          let rec = action.payload.record;
          rec["addToCart"] = action.payload.value;
          cartRecord.push(rec);
          // }
        }
      } else {
        if (action.payload.action === "increment") {
          // if (cartRecord[recIndex]["CartVisibility"]) {
          //   toastr.info("Item quantity has been changed");
          // }

          cartRecord[recIndex]["addToCart"]++;
        } else if (action.payload.action === "decrement") {
          if (cartRecord[recIndex]["addToCart"] == 1) {
            cartRecord[recIndex]["addToCart"]--;
<<<<<<< HEAD
            if (cartRecord[recIndex]["CartVisibility"]) {
              toastr.info("Item has been removed.");
              cartRecord[recIndex]["CartVisibility"] = false;
              cartRecord.splice(recIndex, 1);
            }

            // cartRecord[recIndex]["CartVisibility"] = false;
            // toastr.info("Item has been removed.");

            // cartRecord.splice(recIndex, 1);
=======
            cartRecord[recIndex]["CartVisibility"] = false;
            toastr.info("Item has been removed.");

            cartRecord.splice(recIndex, 1);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          } else {
            // if (cartRecord[recIndex]["CartVisibility"]) {
            //   toastr.info("Item quantity has been changed");
            // }

<<<<<<< HEAD
            if (
              Number(cartRecord[recIndex]["addToCart"]) !== 0 &&
              cartRecord[recIndex]["addToCart"] !== ""
              // cartRecord[recIndex]["addToCart"] !== "0"
            ) {
              cartRecord[recIndex]["addToCart"]--;
            }
=======
            cartRecord[recIndex]["addToCart"]--;
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          }
        } else if (action.payload.action === "remove") {
          cartRecord[recIndex]["addToCart"] = 0;
          cartRecord[recIndex]["CartVisibility"] = false;
          toastr.info("Item has been removed.");
          cartRecord.splice(recIndex, 1);
        } else if (action.payload.action === "input") {
          cartRecord[recIndex]["addToCart"] = action.payload.value;
<<<<<<< HEAD

          if (
            Number(cartRecord[recIndex]["addToCart"]) === 0 ||
            cartRecord[recIndex]["addToCart"] === ""
          ) {
            if (cartRecord[recIndex]["CartVisibility"]) {
              toastr.info("Item has been removed.");
              cartRecord[recIndex]["CartVisibility"] = false;
              cartRecord.splice(recIndex, 1);
            }
          }
        }
      }


      // store in local storage
      localStorage.setItem("cart", JSON.stringify(cartRecord));

      return {
        ...state,
        QuantityofEachProduct: cartRecord
=======
        }
      }

      return {
        ...state,
        QuantityofEachProduct: cartRecord,
      };

    case ADD_NEW_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case ADD_TO_CART:
      let cartRecordv2 = state.QuantityofEachProduct;

      const recIndexv2 = cartRecordv2.findIndex((t) => t._id == action.payload._id);

      if (recIndexv2 == -1) {
        //do nothing
      } else {
<<<<<<< HEAD
        if (
          Number(cartRecordv2[recIndexv2]["addToCart"]) > 0 &&
          cartRecordv2[recIndexv2]["addToCart"] !== ""
        ) {
          cartRecordv2[recIndexv2]["CartVisibility"] = true;
=======
        cartRecordv2[recIndexv2]["CartVisibility"] = true;
        if (cartRecordv2[recIndexv2]["addToCart"] > 0) {
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          toastr.success("Item has been added to cart");
        }
      }

      return {
        ...state,
<<<<<<< HEAD
        QuantityofEachProduct: cartRecordv2
=======
        QuantityofEachProduct: cartRecordv2,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_PRODUCT_LIST_SUCCESS:
      return action.payload
        ? {
            ...state,
<<<<<<< HEAD
            productList: action.payload
          }
        : {
            ...state,
            productList: { message: "No Content Found" }
=======
            productList: action.payload,
          }
        : {
            ...state,
            productList: { message: "No Content Found" },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          };
    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        error: action.payload
      };

    case UPDATE_PRODUCT_LIST:
      return {
        ...state,
        updated: false
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        updated: true

        // productList: state.productList.map((data) => {
        //   return data.code.toString() === action.payload.data.code.toString()
        //     ? { data, ...action.payload.data }
        //     : data;
        // })
=======
        productList: state.productList.map((data) => {
          return data.code.toString() === action.payload.data.code.toString()
            ? { data, ...action.payload.data }
            : data;
        }),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case UPDATE_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
<<<<<<< HEAD
        updated: false
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
<<<<<<< HEAD
        deleted: true

        // productList: state.productList.filter(
        //   (data) => data.code.toString() !== action.payload.data.code.toString()
        // )
=======
        productList: state.productList.filter(
          (data) => data.code.toString() !== action.payload.data.code.toString()
        ),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case CLEAR_CART:
      const s = state.QuantityofEachProduct;
      s.forEach(function (item) {
        item.addToCart = 0;
        item.CartVisibility = false;
      });

      return {
        ...state,
<<<<<<< HEAD
        QuantityofEachProduct: s
=======
        QuantityofEachProduct: s,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case DELETE_PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
<<<<<<< HEAD
        deleted: false
      };

    case CLEAR_PRODUCT_IMAGES:
      return {
        ...state,
        imageUrls: [],
        imageLoading: false,
        imageError: null
      };

    case CLEAR_SINGLE_IMAGE:
      const index = state.imageUrls.findIndex((data) => data.filename === action.payload);

      if (index > -1) {
        state.imageUrls.splice(index, 1);
      }

      return {
        ...state
      };

    case RESET_STATUS:
      return {
        ...state,
        loading: false,
        added: false,
        error: null,
        imageLoading: false,
        imageError: null,
        imageUrls: [],
        uploaded: false
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    default:
      return state;
  }
};

export default ProductListReducer;
