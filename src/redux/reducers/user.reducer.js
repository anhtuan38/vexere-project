import { FAIL, REQUEST, SUCCESS, USER_ACTION } from "../constants";

const initialState = {
  data: {},
  userInfo: {},
  loading: false,
};

function reducer(state = initialState, action) {
  console.log(
    "🚀 ~ file: user.reducer.js ~ line 10 ~ reducer ~ action",
    action.payload
  );
  switch (action.type) {
    case REQUEST(USER_ACTION.SIGN_IN):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(USER_ACTION.SIGN_IN):
      localStorage.setItem("token", action?.payload?.data?.accessToken);
      localStorage.setItem("user", JSON.stringify(action?.payload?.data?.user));
      return {
        ...state,
        userInfo: {
          data: action.payload.data,
        },
        loading: false,
      };
    case FAIL(USER_ACTION.SIGN_IN):
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    // sign up
    case REQUEST(USER_ACTION.SIGN_UP):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(USER_ACTION.SIGN_UP):
      console.log(action.payload.data);

      return {
        ...state,
        userInfo: {
          data: action.payload.data,
        },
        loading: false,
      };
    case FAIL(USER_ACTION.SIGN_UP):
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    default:
      return state;
  }
}

export { initialState };
export default reducer;
