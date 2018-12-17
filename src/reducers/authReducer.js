const init = {
  success: null
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case "FAILED_LOGIN":
      return {
        ...state,
        success: "Login error"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        success: null
      };
    case "LOGOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
