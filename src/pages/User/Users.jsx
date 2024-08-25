import { useEffect } from "react";
import Title from "../../components/Title/Title";
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/user.action";  // Ensure this path is correct

const Users = () => {
  const { setAppTitle } = useAppContext();
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  useEffect(() => {
    setAppTitle("Users");
  }, [setAppTitle]);

  return (
    <>
      <Title>Users</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length
              ? users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                ))
              : Array.from(Array(5).keys()).map((i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton height={"30px"} />
                    </TableCell>
                    <TableCell>
                      <Skeleton height={"30px"} />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
