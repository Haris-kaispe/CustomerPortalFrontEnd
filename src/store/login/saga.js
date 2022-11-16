import { call, put, takeEvery } from "redux-saga/effects";

// OrderManagement Redux States
import { LOGIN } from "./actionTypes";

import { LoginSuccess, LoginFail } from "./actions";

//Include Both Helper File with needed methods
import { Login } from "../../helpers/backend_helper";

function* LoginUser({ payload: rec }) {
  try {
    const response = yield call(Login, rec);
    yield put(LoginSuccess(response));
  } catch (error) {
    yield put(LoginFail(error));
  }
}

function* LoginSaga() {
  yield takeEvery(LOGIN, LoginUser);
}

export default LoginSaga;
