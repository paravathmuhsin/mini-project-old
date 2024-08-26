import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import postReducer from "./post.reducer";
import albumReducer from "./album.reducer";
export default combineReducers({
  login: loginReducer,
  post: postReducer,
  album: albumReducer,
});
