import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

const initialValue = {
  isLoggedin: Boolean(localStorage.getItem("isLoggedin")),
  loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
};

const loginReducer = (state = initialValue, action) => {
  if (action.type === SET_LOGIN) {
    return { isLoggedin: true, loggedUser: action.payload };
  }
  if (action.type === SET_LOGOUT) {
    return { isLoggedin: false, loggedUser: null };
  }
  return state;
};

export default loginReducer;
