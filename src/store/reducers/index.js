import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import commentReducer from "./comment.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
  login: loginReducer,
  comment: commentReducer,
  post: postReducer,
});
