import { useEffect } from "react";
import Title from "../../components/Title/Title";
import axios from "axios";
import { useState } from "react";
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
import { fetchPosts } from "../../store/actions/post.action";

const Albums = () => {
    const [album, setAlbums] = useState([]);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
        setAlbums(res.data);
      });
  
    }, []);
    return (
    <>
      <Title>Album</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No:</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {album.length
              ? album.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      <Link to={"/posts/" + row.id}>{row.title}</Link>
                    </TableCell>
                    
                  </TableRow>
                ))
              : Array.from(Array(5).keys()).map((i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
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

export default Albums;
