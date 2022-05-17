import { createAction } from "../../helper";
import { REQUEST, USER_ACTION } from "../constants";

export const loginAction = (payload) =>
  createAction(REQUEST(USER_ACTION.SIGN_IN), payload);

export const registerAction = (payload) =>
  createAction(REQUEST(USER_ACTION.SIGN_UP), payload);

export const logoutAction = (payload) =>
  createAction(REQUEST(USER_ACTION.SIGN_OUT), payload);
