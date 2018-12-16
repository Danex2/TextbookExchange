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
    default:
      return state;
  }
};

export default authReducer;
