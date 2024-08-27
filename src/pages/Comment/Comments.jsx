import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getComments } from "../../models/comment.model";
import { useAppContext } from "../../components/AppContext/AppContext";

const Comments = () => {
  const { setAppTitle } = useAppContext();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res);
    });
  }, []);
  useEffect(() => {
    setAppTitle("Comments");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ( <>
    <Title>Comments</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={"/comments/" + row.id}>{row.name}</Link>
                </TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
 

export default Comments;