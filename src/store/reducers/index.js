import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
  login: loginReducer,
  post: postReducer,
});
