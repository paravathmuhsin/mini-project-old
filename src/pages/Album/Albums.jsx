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
import { fetchAlbums } from "../../store/actions/album.action";

const Albums = () => {
  const { setAppTitle } = useAppContext();
  const albums = useSelector((state) => state.album.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!albums.length) {
      dispatch(fetchAlbums());
    }
  }, [dispatch, albums.length]);
  useEffect(() => {
    setAppTitle("Albums");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Albums</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO:</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.length
              ? albums.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      <Link to={"/albums/" + row.id}>{row.title}</Link>
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
