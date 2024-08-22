import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

export const setLogin = (user) => ({ type: SET_LOGIN, payload: user });
export const setLogout = () => ({ type: SET_LOGOUT });
