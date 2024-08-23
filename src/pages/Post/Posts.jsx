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
import { fetchPosts } from "../../store/actions/post.action";

const Posts = () => {
  const { setAppTitle } = useAppContext();
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // getPosts().then((res) => {
    //   setPosts(res);
    // });
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);
  useEffect(() => {
    setAppTitle("Posts");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Posts</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.length
              ? posts.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link to={"/posts/" + row.id}>{row.title}</Link>
                    </TableCell>
                    <TableCell>{row.body}</TableCell>
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

export default Posts;
