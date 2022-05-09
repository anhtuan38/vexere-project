import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { USER_ACTION } from "../constants";

function* signInSaga(action) {
  try {
    const { data } = action.payload;
    // const result = yield axios.get("http://localhost:8000/login", data);
    const result = yield axios.get("http://localhost:8000/register");

    result[0].filter(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    result.length ? alert("success") : alert("fair");

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
    const { data } = action.payload;
    const users = yield axios.get("http://localhost:8000/register") || [];
    const hasUserName = users.map((user) => user.username === data.username);

    if (!hasUserName) {
      yield axios.post("http://localhost:8000/register", data);
      yield put({
        type: USER_ACTION.SIGN_UP,
      });
    } else throw new Error("already exist");
  } catch (errors) {
    console.log(errors);
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
