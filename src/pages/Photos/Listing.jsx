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
import { fetchPhotos } from "../../store/actions/photos.action";

const Photos = () => {
  const { setAppTitle } = useAppContext();
 
  const photos = useSelector((state) => state.photo.photos);
  const dispatch = useDispatch();

  useEffect(() => {
  
    if (!photos.length) {
      dispatch(fetchPhotos());
    }
  }, [dispatch, photos.length]);
  useEffect(() => {
    setAppTitle("Photos");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Photos</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Photos Listing</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.length
              ? photos.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link to={"/photos/" + row.id}>{row.thumbnailUrl}</Link>
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

export default Photos;
