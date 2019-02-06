import axios from "axios";

export const getDashboardPosts = email => dispatch => {
  axios
    .post("/dashboard", {
      email
    })
    .then(res => {
      dispatch({
        type: "DASHBOARD_POSTS",
        data: res.data
      });
    })
    .catch(e => {
      dispatch({
        type: "DASHBOARD_ERROR",
        data: e
      });
    });
};

export const getListings = () => dispatch => {
  axios
    .get("/posts")
    .then(res => {
      dispatch({
        type: "LISTING_POSTS",
        data: res.data
      });
    })
    .catch(e => {
      dispatch({
        type: "LISTING_ERROR",
        data: e
      });
    });
};
