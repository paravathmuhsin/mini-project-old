import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import commentReducer from "./comment.reducer";

export default combineReducers({
  login: loginReducer,
  comment: commentReducer,
});