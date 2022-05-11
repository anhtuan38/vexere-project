import { put, takeEvery } from "redux-saga/effects";

import { openNotificationWithIcon } from "../../helper";

import { FAIL, REQUEST, SUCCESS, USER_ACTION } from "../constants";
import { authAPI } from "../../Service";

function* Login(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield authAPI.login(data);
    console.log(response.data);
    yield put({
      type: SUCCESS(USER_ACTION.SIGN_IN),
      payload: response,
    });
    yield openNotificationWithIcon({
      type: "success",
      message: "Login success!",
    });

    // if (response.data.user.role === "admin") {
    //   yield history.push(ROUTER_URL.ADMIN);
    // } else {
    //   yield history.push(ROUTER_URL.HOME);
    // }
    callback();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.SIGN_IN),
      payload: e.message,
    });
    yield openNotificationWithIcon({
      type: "error",
      message: "Login fail!",
      description: "Incorrect account or password!",
    });
  }
}

function* Register(action) {
  try {
    const { data, callback } = action.payload;

    const response = yield authAPI.register(data);
    console.log(response.data);
    yield put({
      type: SUCCESS(USER_ACTION.SIGN_UP),
      payload: response,
    });
    yield openNotificationWithIcon({
      type: "success",
      message: "Register success!",
    });
    // if (response.data.user.role === "admin") {
    //   yield history.push(ROUTER_URL.ADMIN);
    // } else {
    //   yield history.push(ROUTER_URL.HOME);
    // }
    callback();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.SIGN_UP),
      payload: e.message,
    });
    yield openNotificationWithIcon({
      type: "error",
      message: "Register fail!",
      description: "Account already exists! Please use another email!",
    });
  }
}

// function* getUserInfoSaga(action) {
//   try {
//     const { id } = action.payload;
//     const result = yield axios.get(`http://localhost:8000/users/${id}`);
//     yield put({
//       type: USER_ACTION.GET_USER_INFO,
//       payload: {
//         data: result.data,
//       },
//     });
//   } catch (errors) {
//     console.log(errors);
//   }
// }

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.SIGN_IN), Login);
  yield takeEvery(REQUEST(USER_ACTION.SIGN_UP), Register);
  // yield takeEvery(USER_ACTION.SIGN_UP, signUpSaga);
  // yield takeEvery(USER_ACTION.GET_USER_INFO, getUserInfoSaga);
}
