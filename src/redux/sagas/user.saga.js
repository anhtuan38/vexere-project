import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { openNotificationWithIcon } from "../../helper";

import { USER_ACTION } from "../constants";

function* signInSaga(action) {
  try {
    const { data } = action.payload;
    // const result = yield axios.get("http://localhost:8000/login", data);
    const result = yield axios.get("http://localhost:8000/register");

    result.filter(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    // yield localStorage.setItem("accessToken", result.data.accessToken);
    // yield put({
    //   type: USER_ACTION.SIGN_IN,
    //   payload: {
    //     data: result.data,
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
}

function* signUpSaga(action) {
  try {
    console.log("asdas");
    const { data, callback } = action.payload;
    const users = yield axios.get("http://localhost:8000/users") || [];

    const hasUserName = users.data.filter(
      (user) => user.username === data.username
    );

    if (hasUserName.length === 0) {
      yield axios.post("http://localhost:8000/users", data);
      openNotificationWithIcon({
        type: "success",
        message: "Đăng ký thành công",
      });
      callback();
    } else {
      openNotificationWithIcon({
        type: "error",
        message: "Tài khoản đã tồn tại",
        description: "Vui lòng chọn tài khoản khác",
      });
    }
  } catch (errors) {
    // yield put(type: USER_ACTION.SIGN_UP_FAIL, payload: errors);
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:8000/users/${id}`);
    yield put({
      type: USER_ACTION.GET_USER_INFO,
      payload: {
        data: result.data,
      },
    });
  } catch (errors) {
    console.log(errors);
  }
}

export default function* userSaga() {
  yield takeEvery(USER_ACTION.SIGN_IN, signInSaga);
  yield takeEvery(USER_ACTION.SIGN_UP, signUpSaga);
  yield takeEvery(USER_ACTION.GET_USER_INFO, getUserInfoSaga);
}
