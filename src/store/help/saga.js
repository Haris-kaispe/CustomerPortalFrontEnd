<<<<<<< HEAD
import { ADD_NEW_CONTACT, GET_ALL_CONTACT, GET_CONTACT_DETAILS, UPLOAD_IMAGE } from "./actionTypes";
import {
  addNewContact,
  getContactDetails,
  getContactList,
  uploadImages
} from "../../helpers/backend_helper";
import {
  addNewContactFail,
  addNewContactSuccess,
  getAllContactFail,
  getAllContactSuccess,
  getContactDetailsFail,
  getContactDetailsSuccess,
  uploadImageFail,
  uploadImageSuccess
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

=======
import { call, put, takeEvery } from "redux-saga/effects";

// Help Redux States
import { ADD_NEW_HELP, DELETE_HELP, GET_HELP, UPDATE_HELP, ADD_NEW_CONTACT } from "./actionTypes";
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
    console.log("payload", rec);
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

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
function* onAddNewContact({ payload: rec }) {
  try {
    const response = yield call(addNewContact, rec);

    yield put(addNewContactSuccess(response));
  } catch (error) {
    yield put(addNewContactFail(error));
  }
}

<<<<<<< HEAD
function* UploadImage(action) {
  try {
    const response = yield call(uploadImages, action.payload);

    yield put(uploadImageSuccess(response));
  } catch (error) {
    yield put(uploadImageFail(error));
  }
}

function* onGetAllContact({ payload: rec }) {
  try {
    const response = yield call(getContactList, rec);
    yield put(getAllContactSuccess(response.data));
  } catch (error) {
    yield put(getAllContactFail(error));
  }
}

function* onGetContactDetails({ payload: rec }) {
  try {
    const response = yield call(getContactDetails, rec);


    yield put(getContactDetailsSuccess(response.data));
  } catch (error) {
    yield put(getContactDetailsFail(error));
  }
}

function* HelpSaga() {
  yield takeEvery(ADD_NEW_CONTACT, onAddNewContact);
  yield takeEvery(UPLOAD_IMAGE, UploadImage);
  yield takeEvery(GET_ALL_CONTACT, onGetAllContact);
  yield takeEvery(GET_CONTACT_DETAILS, onGetContactDetails);
=======
function* HelpSaga() {
  yield takeEvery(GET_HELP, fetchHelp);
  yield takeEvery(ADD_NEW_HELP, onAddNewHelp);
  yield takeEvery(UPDATE_HELP, onUpdateHelp);
  yield takeEvery(DELETE_HELP, onDeleteHelp);
  yield takeEvery(ADD_NEW_CONTACT, onAddNewContact);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
}

export default HelpSaga;
