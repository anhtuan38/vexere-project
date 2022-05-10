import { USER_ACTION } from "../constants";

const initialState = {
  userInfo: {
    data: JSON.parse(localStorage.getItem("user")) || {},
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION.SIGN_IN:
      return {
        ...state,
        userInfo: {
          data: action.payload.data,
        },
      };
    case USER_ACTION.SIGN_OUT:
      return {
        ...state,
        userInfo: {
          data: {},
        },
      };
    default:
      return state;
  }
}

export { initialState };
export default reducer;
