import { call, put, takeEvery } from "redux-saga/effects";

// Help Redux States
import {
  ADD_NEW_HELP,
  DELETE_HELP,
  GET_HELP,
  UPDATE_HELP,
  ADD_NEW_CONTACT,
} from "./actionTypes";
import {
  getHelpSuccess,
  getHelpFail,
  updateHelpSuccess,
  updateHelpFail,
  addNewHelpFail,
  addNewHelpSuccess,
  deleteHelpSuccess,
  deleteHelpFail,
  addNewContactSuccess,
  addNewContactFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
  addNewHelp,
  deleteHelp,
  getHelp,
  updateHelp,
  addNewContact,
} from "../../helpers/backend_helper";

function* fetchHelp({ payload: rec }) {
  try {
    const response = yield call(getHelp, rec);
    yield put(getHelpSuccess(response));
  } catch (error) {
    yield put(getHelpFail(error));
  }
}

function* onUpdateHelp({ payload: rec }) {
  try {
    const response = yield call(updateHelp, rec);
    yield put(updateHelpSuccess(response));
  } catch (error) {
    yield put(updateHelpFail(error));
  }
}

function* onAddNewHelp({ payload: rec }) {
  try {
    const response = yield call(addNewHelp, rec);

    yield put(addNewHelpSuccess(response));
  } catch (error) {
    yield put(addNewHelpFail(error));
  }
}

function* onDeleteHelp({ payload: rec }) {
  try {
    const response = yield call(deleteHelp, rec);
    yield put(deleteHelpSuccess(response));
  } catch (error) {
    yield put(deleteHelpFail(error));
  }
}

function* onAddNewContact({ payload: rec }) {
  try {
    const response = yield call(addNewContact, rec);

    yield put(addNewContactSuccess(response));
  } catch (error) {
    yield put(addNewContactFail(error));
  }
}

function* HelpSaga() {
  yield takeEvery(GET_HELP, fetchHelp);
  yield takeEvery(ADD_NEW_HELP, onAddNewHelp);
  yield takeEvery(UPDATE_HELP, onUpdateHelp);
  yield takeEvery(DELETE_HELP, onDeleteHelp);
  yield takeEvery(ADD_NEW_CONTACT, onAddNewContact);
}

export default HelpSaga;
