import { createAction } from "@reduxjs/toolkit";

import { USER_ACTION } from "../constants";

export const signInAction = createAction(USER_ACTION.SIGN_IN);

export const signUpAction = createAction(USER_ACTION.SIGN_UP);

export const signOutAction = createAction(USER_ACTION.SIGN_OUT);

export const getUserInfoAction = createAction(USER_ACTION.GET_USER_INFO);

// export const updateUserInfoAction = createAction(USER_ACTION.UPDATE_USER_INFO);
