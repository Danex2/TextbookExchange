const init = {
  success: null,
  data: []
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case "DASHBOARD_POSTS":
      return {
        ...state,
        data: [...state.data, action.data],
        success: null
      };
    default:
      return state;
  }
};

export default postReducer;
