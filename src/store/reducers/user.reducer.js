import { GET_USERS, GET_USER } from "../types/user.type";

const initialValue = {
  users: [],
  user: null,
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
