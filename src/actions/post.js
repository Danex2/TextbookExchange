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

export const deletePost = id => dispatch => {
  axios
    .delete("/dashboard", {
      data: {
        id
      }
    })
    .then(res => {
      dispatch({
        type: "DELETE_POST",
        data: id
      });
    })
    .catch(e => {
      dispatch({
        type: "DELETE_ERROR",
        data: e
      });
    });
};
