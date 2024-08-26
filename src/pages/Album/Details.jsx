import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getAlbum } from "../../models/album.model";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton, Typography } from "@mui/material";

const variants = ["h3", "body1", "body1"];
const Details = () => {
  const [post, setPost] = useState();
  const { setAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getAlbum(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  useEffect(() => {
    setAppTitle("Post Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Album details</Title>
      {post ? (
        <div>
          <Typography component={"h3"} variant="h5">{post.title}</Typography>
          <Typography component={"p"} variant="body1">{post.body}</Typography>
        </div>
      ) : (
        variants.map((variant) => (
          <Typography component="div" key={variant} variant={variant}>
            <Skeleton />
          </Typography>
        ))
      )}
    </>
  );
};

export default Details;
