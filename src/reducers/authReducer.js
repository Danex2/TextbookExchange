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
    default:
      return state;
  }
};

export default authReducer;
