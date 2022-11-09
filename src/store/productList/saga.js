import { call, put, takeEvery } from "redux-saga/effects";

// ProductList Redux States
import {
  ADD_NEW_PRODUCT_LIST,
  DELETE_PRODUCT_LIST,
  GET_PRODUCT_LIST,
  UPDATE_PRODUCT_LIST,
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
  addNewProductList,
  deleteProductList,
  getProductList,
  updateProductList,
} from "../../helpers/backend_helper";

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

function* ProductListSaga() {
  yield takeEvery(GET_PRODUCT_LIST, fetchProductList);
  yield takeEvery(ADD_NEW_PRODUCT_LIST, onAddNewProductList);
  yield takeEvery(UPDATE_PRODUCT_LIST, onUpdateProductList);
  yield takeEvery(DELETE_PRODUCT_LIST, onDeleteProductList);
}

export default ProductListSaga;
