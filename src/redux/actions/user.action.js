import { USER_ACTION } from "../constants";

export const signUpAction = (payload) => {
  return {
    type: USER_ACTION.SIGN_UP,
    payload,
  };
};

export const signInAction = (payload) => {
  return {
    type: USER_ACTION.SIGN_IN,
    payload,
  };
};
