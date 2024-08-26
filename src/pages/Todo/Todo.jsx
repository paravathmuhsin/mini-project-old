import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actions/todo.action";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";

const Todos = () => {
  const { setAppTitle } = useAppContext();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const navigate = useNavigate();

  useEffect(() => {
    if (!todos.length) {
      dispatch(fetchTodos());
    }
  }, [dispatch, todos.length]);

  const handleTodoClick = (id) => {
    navigate(`/todo/${id}`);
  };

  useEffect(() => {
    setAppTitle("Todo");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ color: "#1976d2", marginBottom: "16px" }}>
        Todo Items
      </Typography>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            button
            onClick={() => handleTodoClick(todo.id)}
          >
            <Checkbox
              checked={todo.completed}
              disabled
              sx={{
                color: todo.completed ? "blue" : "grey",
                "&.Mui-checked": {
                  color: "blue",
                },
              }}
            />
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todos;
