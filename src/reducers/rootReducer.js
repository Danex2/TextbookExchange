import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  post: postReducer
});

export default rootReducer;
