import { FETCH_TODOS, FETCH_TODO } from "../types/todo.type";

const initialState = {
  todos: [],
  todo: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case FETCH_TODO:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
}
