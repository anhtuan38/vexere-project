import { createReducer } from "@reduxjs/toolkit";

import { USER_ACTION } from "../constants";

const initialState = {
  userInfo: {
    data: JSON.parse(localStorage.getItem("user")) || {},
  },
};

const userReducer = createReducer(initialState, {
  // [USER_ACTION.GET_USER_INFO]: (state, action) => {
  //   return {
  //     ...state,
  //     userInfo: {
  //       ...state.userInfo,
  //     },
  //   };
  // },
  [USER_ACTION.SIGN_UP]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: action.payload,
      },
    };
  },

  [USER_ACTION.SIGN_IN]: (state, action) => {
    const { data } = action.payload;
    console.log("🚀 ~ file: user.reducer.js ~ line 32 ~ data", data);
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data.username,
      },
    };
  },

  [USER_ACTION.SIGN_OUT]: (state, action) => {
    return {
      ...state,
      userInfo: {
        data: {},
      },
    };
  },
});

export default userReducer;
