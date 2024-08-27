import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getComment } from "../../models/comment.model";
import { useAppContext } from "../../components/AppContext/AppContext";

const Details = () => {
  const [comment, setComment] = useState();
  const { setAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getComment(id).then((res) => {
      setComment(res);
    });
  }, [id]);

  useEffect(() => {
    setAppTitle("Comment Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Comment details</Title>
      {comment && (
        <div>
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p>{comment.body}</p>

        </div>
      )}
    </>
  );
};

export default Details;