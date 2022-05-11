import { ALERT } from "../constants";

function success(message) {
  return { type: ALERT.SUCCESS, message };
}

function error(message) {
  return { type: ALERT.ERROR, message };
}

function clear() {
  return { type: ALERT.CLEAR };
}

export const alertActions = {
  success,
  error,
  clear,
};
