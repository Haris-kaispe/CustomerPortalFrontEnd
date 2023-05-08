import {
<<<<<<< HEAD
  ADD_NEW_PRODUCT_LIST,
  ADD_NEW_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_PRODUCT_IMAGES,
  CLEAR_SINGLE_IMAGE,
  DELETE_PRODUCT_LIST,
  DELETE_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST,
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
=======
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_PRODUCT_LIST,
  UPDATE_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_LIST_FAIL,
  ADD_NEW_PRODUCT_LIST,
  ADD_NEW_PRODUCT_LIST_SUCCESS,
  ADD_NEW_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_FAIL,
  DELETE_PRODUCT_LIST_SUCCESS,
  DELETE_PRODUCT_LIST,
  QUANTITY_CHANGE,
  CLEAR_CART,
  ADD_TO_CART,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

export const getProductList = (rec) => ({
  type: GET_PRODUCT_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const QuantityChange = (qObject) => {
  return {
    type: QUANTITY_CHANGE,
    payload: qObject,
<<<<<<< HEAD
    value: 0
=======
    value: 0,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  };
};

export const clearCart = (rec) => ({
  type: CLEAR_CART,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const AddtoCart = (rec) => ({
  type: ADD_TO_CART,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getProductListSuccess = (rec) => ({
  type: GET_PRODUCT_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const getProductListFail = (error) => ({
  type: GET_PRODUCT_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateProductList = (rec) => ({
  type: UPDATE_PRODUCT_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateProductListSuccess = (rec) => ({
  type: UPDATE_PRODUCT_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const updateProductListFail = (error) => ({
  type: UPDATE_PRODUCT_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewProductList = (rec) => ({
  type: ADD_NEW_PRODUCT_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewProductListSuccess = (rec) => ({
  type: ADD_NEW_PRODUCT_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const addNewProductListFail = (error) => ({
  type: ADD_NEW_PRODUCT_LIST_FAIL,
<<<<<<< HEAD
  payload: error
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteProductList = (rec) => ({
  type: DELETE_PRODUCT_LIST,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteProductListSuccess = (rec) => ({
  type: DELETE_PRODUCT_LIST_SUCCESS,
<<<<<<< HEAD
  payload: rec
=======
  payload: rec,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export const deleteProductListFail = (error) => ({
  type: DELETE_PRODUCT_LIST_FAIL,
<<<<<<< HEAD
  payload: error
});

export const uploadProductImage = (rec) => ({
  type: UPLOAD_PRODUCT_IMAGE,
  payload: rec
});

export const uploadProductImageSuccess = (rec) => ({
  type: UPLOAD_PRODUCT_IMAGE_SUCCESS,
  payload: rec
});

export const uploadProductImageFail = (error) => ({
  type: UPLOAD_PRODUCT_IMAGE_FAIL,
  payload: error
});

export const clearProductImages = () => ({
  type: CLEAR_PRODUCT_IMAGES
});

export const clearSingleImage = (rec) => ({
  type: CLEAR_SINGLE_IMAGE,
  payload: rec
});

export const resetStatus = () => ({
  type: RESET_STATUS
=======
  payload: error,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
