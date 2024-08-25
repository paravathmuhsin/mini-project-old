import axios from "axios";
import { FETCH_TODOS, FETCH_TODO } from "../types/todo.type";

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  dispatch({ type: FETCH_TODO, payload: response.data });
};
