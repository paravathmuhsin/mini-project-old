import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import commentReducer from "./comment.reducer";
import postReducer from "./post.reducer";
import albumReducer from "./album.reducer";
import userReducer from "./user.reducer";
import photosReducer from "./photos.reducer";
import todoReducer from "./todo.reducer";

export default combineReducers({
  login: loginReducer,
  comment: commentReducer,
  post: postReducer,
  album: albumReducer,
  todo: todoReducer,
  user: userReducer,
  photo: photosReducer,
});
