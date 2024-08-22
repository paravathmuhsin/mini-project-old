import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getPost } from "../../models/post.model";
import { useAppContext } from "../../components/AppContext/AppContext";

const Details = () => {
  const [post, setPost] = useState();
  const { setAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  useEffect(() => {
    setAppTitle("Post Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Post details</Title>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default Details;
