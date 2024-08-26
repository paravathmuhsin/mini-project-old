import { getUsers, getUser } from "../../models/user.model";
import { GET_USERS, GET_USER } from "../types/user.type";

const getUsersAction = (data) => ({ type: GET_USERS, payload: data });
const getUserAction = (data) => ({ type: GET_USER, payload: data });

export const fetchUsers = () => (dispatch) => {
  getUsers().then((res) => {
    dispatch(getUsersAction(res));
  });
};

export const fetchUser = (id) => (dispatch) => {
  return getUser(id).then((res) => {
    dispatch(getUserAction(res));
  });
};
