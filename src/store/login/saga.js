<<<<<<< HEAD
import { LOGIN_USER, LOGIN_WITH_AZURE, LOGOUT_USER } from "./actionTypes";
import { Login, LogintoAzure, postAzureLogin } from "../../helpers/backend_helper";
import {
  apiError,
  azureLoginResponseError,
  azureLoginResponseSuccess,
  loginSuccess,
  loginWithAzureError,
  loginWithAzureSuccess
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

import toastr from "toastr";
=======
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import { useNavigate } from "react-router-dom";

import { PublicClientApplication } from "@azure/msal-browser";
import { config } from "../../Config";
// Login Redux States
import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  LOGIN_WITH_AZURE,
  LOGIN_WITH_AZURE_SUCCESS,
  LOGIN_WITH_AZURE_ERROR,
  AZURE_LOGIN_SUCCESS,
  AZURE_LOGIN_ERROR
} from "./actionTypes";
import {
  apiError,
  loginSuccess,
  logoutUserSuccess,
  loginWithAzureSuccess,
  loginWithAzureError
} from "./actions";

import { Login, postAzureLogin, LogintoAzure } from "../../helpers/backend_helper";
import { stringify } from "postcss";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(Login, {
      email: user.email,
      password: user.password
    });

<<<<<<< HEAD
    if (response?.accessToken) {
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
      history("/dashboard");
    }
=======
    console.log(response, "---res");
    if ("accessToken" in response) {
      localStorage.setItem("authUser", JSON.stringify(response));
      console.log("Validasd", stringify.JSON(response));
      yield put(loginSuccess(response));
      history("/dashboard");
    } else {
    }

    // if (Object.keys(response).length !== 0) {
    //   localStorage.setItem("authUser", JSON.stringify(response));
    //   yield put(loginSuccess(response));
    // } else {
    // }

    // if (response.response.status === 401) {
    //   console.log("Validasd")

    // } else {
    //   console.log("Failed validat")
    // }
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginWithAzure({ payload: history }) {
  try {
    const response = yield call(LogintoAzure);
<<<<<<< HEAD
    if (response?.errorCode === "user_cancelled") {
      yield put(loginWithAzureError(response));
    } else if (response?.errorCode === "interaction_in_progress") {
      yield put(loginWithAzureError(response));
    } else {
      yield put(loginWithAzureSuccess(response));

      const backendResponse = yield call(postAzureLogin, response);

      if (backendResponse?.accessToken && backendResponse?.azure_data) {
        localStorage.setItem("authUser", JSON.stringify(backendResponse));
        history("/admin-panel");
      } else if (backendResponse?.message) {
        toastr.error(backendResponse.message, "Error");
      }
    }
  } catch (error) {
    yield put(loginWithAzureError(error));
  }
}

=======
    yield put(loginWithAzureSuccess(response));
    // console.log(response, "---res");
    //  yield put(loginSuccess(response));
    const backendResponse = yield call(postAzureLogin, response);
    console.log(backendResponse, "---backend res");
  } catch (error) {
    yield put(loginWithAzureError(response));
  }
}

// function* sendAzureLogin({ payload: response }) {
//   try {
//     const backendResponse = yield call(postAzureLogin, response);
//     console.log(backendResponse, "---backend res");
//   } catch (error) {
//     yield put(loginWithAzureError(response));
//   }
// }

//   const RESPONSE = {};

//   const PCInstance = new PublicClientApplication({
//     auth: {
//       clientId: config.appId,
//       authority: config.authority,
//       redirectUri: config.redirectUri
//     },
//     cache: {
//       cacheLocation: "sessionStorage",
//       storeAuthStateInCookie: true
//     }
//   });

//   const authCodeRequest = {
//     scopes: config.scopes,
//     redirectUri: config.redirectUri
//   };

//   PCInstance.loginPopup(authCodeRequest)
//     .then((response) => {
//       console.log(response);
//       const authUser = {
//         accessToken: response.accessToken,
//         email: response.account.username,
//         name: response.account.name,
//         id: response.account.homeAccountId
//       };

//       // RESPONSE = response;
//       // const azureLoginResponse = call(postAzureLogin, response);
//       // console.log(azureLoginResponse, "---res");

//       localStorage.setItem("authUser", JSON.stringify(authUser));
//       yield put(loginWithAzureSuccess(authUser));

//       //  history("/dashboard");
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   // call post azure login api
// } catch (error) {
//   yield put(apiError(error));
// }
//}

// const handleAzureLogin = (async) => {
//   const msalInstance = new PublicClientApplication({
//     auth: {
//       clientId: config.appId,
//       authority: config.authority,
//       redirectUri: config.redirectUri
//     },
//     cache: {
//       cacheLocation: "sessionStorage",
//       storeAuthStateInCookie: true
//     }
//   });

//   try {
//     const authCodeRequest = {
//       scopes: config.scopes,
//       redirectUri: config.redirectUri
//     };

//     msalInstance
//       .loginPopup(authCodeRequest)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }

// const authCodeRequest = {
//   scopes: config.scopes,
//   redirectUri: config.redirectUri
// };

// msalInstance
//   .acquireTokenRedirect(authCodeRequest)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
function* logoutUser({ payload }) {
  try {
    yield localStorage.removeItem("authUser");
    yield payload("/login");
<<<<<<< HEAD
    // clean saga and redux store
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(LOGIN_WITH_AZURE, loginWithAzure);
<<<<<<< HEAD
=======
  // yield takeEvery(LOGIN_WITH_AZURE_SUCCESS, sendAzureLogin);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
}

export default authSaga;
