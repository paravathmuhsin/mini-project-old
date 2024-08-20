import { createStore } from "redux";
import loginReducer from "./reducers/login.reducer";

const store = createStore(loginReducer);
export default store;
