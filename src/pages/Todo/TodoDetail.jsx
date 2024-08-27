import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/actions/todo.action";
import { Typography, Checkbox, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const TodoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    dispatch(fetchTodo(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!todo) {
    return <Loader />;
  }
  return (
    <Box display="flex" alignItems="center">
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
      <Typography
        variant="h6"
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "8px",
        }}
      >
        {todo.title}
      </Typography>
    </Box>
  );
};

export default TodoDetail;
