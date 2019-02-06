const init = {
  success: null,
  dashboardData: [],
  listingData: []
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case "DASHBOARD_POSTS":
      return Object.assign({}, state, {
        dashboardData: action.data
      });
    case "LISTING_POSTS":
      return Object.assign({}, state, {
        listingData: action.data
      });
    default:
      return state;
  }
};

export default postReducer;
