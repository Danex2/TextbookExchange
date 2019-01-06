const init = {
  success: null
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        success: "Invalid username or password."
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        success: null
      };
    case "LOGOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        success: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        success: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
