const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        root: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        root: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        root: null,
        isFetching: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
