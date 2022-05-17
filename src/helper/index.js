import { notification } from "antd";

export const openNotificationWithIcon = ({ type, message, description }) => {
  notification[type]({
    message,
    description,
  });
};

export const createAction = (type, payload = {}) => {
  return { type, payload };
};
export const createActionSuccess = (type, data = {}) => {
  return { type: `${type}_SUCCESS`, data };
};
export const createActionFail = (type, data = {}) => {
  return { type: `${type}_FAIL`, data };
};

export const logger = (reducer) => {
  return (preState, action) => {
    console.group(action.type);
    console.log("preState: ", preState);
    console.log("Action: ", action);
    const newState = reducer(preState, action);
    console.log("Next State: ", newState);
    console.groupEnd();
    return newState;
  };
};
