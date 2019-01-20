import axios from "axios";

export const getDashboardPosts = email => dispatch => {
  axios
    .post("/dashboard", {
      email
    })
    .then(res => {
      dispatch({
        type: "DASHBOARD_POSTS",
        data: res
      });
    })
    .catch(e => {
      dispatch({
        type: "DASHBOARD_ERROR",
        data: "There was an error fetching your dashboard."
      });
    });
};
