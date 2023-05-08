<<<<<<< HEAD
=======
import { call, put, takeEvery } from "redux-saga/effects";

// ProductList Redux States
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
import {
  ADD_NEW_PRODUCT_LIST,
  DELETE_PRODUCT_LIST,
  GET_PRODUCT_LIST,
  UPDATE_PRODUCT_LIST,
<<<<<<< HEAD
  UPLOAD_PRODUCT_IMAGE
} from "./actionTypes";
import {
=======
} from "./actionTypes";
import {
  getProductListSuccess,
  getProductListFail,
  updateProductListSuccess,
  updateProductListFail,
  addNewProductListFail,
  addNewProductListSuccess,
  deleteProductListSuccess,
  deleteProductListFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  addNewProductList,
  deleteProductList,
  getProductList,
  updateProductList,
<<<<<<< HEAD
  uploadProductImageCall
} from "../../helpers/backend_helper";
import {
  addNewProductListFail,
  addNewProductListSuccess,
  deleteProductListFail,
  deleteProductListSuccess,
  getProductListFail,
  getProductListSuccess,
  updateProductListFail,
  updateProductListSuccess,
  uploadProductImageFail,
  uploadProductImageSuccess
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

// ProductList Redux States

//Include Both Helper File with needed methods
=======
} from "../../helpers/backend_helper";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

function* fetchProductList({ payload: rec }) {
  try {
    const response = yield call(getProductList, rec);
    yield put(getProductListSuccess(response));
  } catch (error) {
    yield put(getProductListFail(error));
  }
}

function* onUpdateProductList({ payload: rec }) {
  try {
    const response = yield call(updateProductList, rec);
    yield put(updateProductListSuccess(response));
  } catch (error) {
    yield put(updateProductListFail(error));
  }
}

function* onAddNewProductList({ payload: rec }) {
  try {
    const response = yield call(addNewProductList, rec);

    yield put(addNewProductListSuccess(response));
  } catch (error) {
    yield put(addNewProductListFail(error));
  }
}

function* onDeleteProductList({ payload: rec }) {
  try {
    const response = yield call(deleteProductList, rec);
    yield put(deleteProductListSuccess(response));
  } catch (error) {
    yield put(deleteProductListFail(error));
  }
}

<<<<<<< HEAD
function* onUploadProductImage({ payload: rec }) {
  try {
    const response = yield call(uploadProductImageCall, rec);
    if (response.data && response.data) {
      yield put(uploadProductImageSuccess(response.data));
    }

    yield put(uploadProductImageSuccess(response.data));
  } catch (error) {
    yield put(uploadProductImageFail(error));
  }
}

=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
function* ProductListSaga() {
  yield takeEvery(GET_PRODUCT_LIST, fetchProductList);
  yield takeEvery(ADD_NEW_PRODUCT_LIST, onAddNewProductList);
  yield takeEvery(UPDATE_PRODUCT_LIST, onUpdateProductList);
  yield takeEvery(DELETE_PRODUCT_LIST, onDeleteProductList);
<<<<<<< HEAD
  yield takeEvery(UPLOAD_PRODUCT_IMAGE, onUploadProductImage);
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
}

export default ProductListSaga;
