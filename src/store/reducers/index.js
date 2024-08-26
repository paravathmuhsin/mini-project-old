import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import postReducer from "./post.reducer";
import todoReducer from "./todo.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  login: loginReducer,
  post: postReducer,
  todoReducer: todoReducer,
  user: userReducer,
});
