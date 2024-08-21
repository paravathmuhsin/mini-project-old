const initialValue = {
  isLoggedin: Boolean(localStorage.getItem("isLoggedin")),
  loggedUser: JSON.parse(localStorage.getItem('loggedUser')),
};

const loginReducer = (state = initialValue, action) => {
  if (action.type === "SET_LOGIN") {
    return { isLoggedin: true, loggedUser: action.payload };
  }
  if (action.type === "SET_LOGOUT") {
    return { ...initialValue };
  }
  return state;
};

export default loginReducer;
