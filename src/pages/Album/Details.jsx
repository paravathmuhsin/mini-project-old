import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getAlbum } from "../../models/album.model";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton, Typography } from "@mui/material";

const Details = () => {
  const [album, setAlbum] = useState();
  const { setAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getAlbum(id).then((res) => {
      setAlbum(res);
    });
  }, [id]);

  useEffect(() => {
    setAppTitle("Album Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Album details</Title>
      {album ? (
        <div>
          <Typography component={"h3"} variant="h5">
            {album.title}
          </Typography>
        </div>
      ) : (
        <Typography component="div" key={"h3"} variant={"h5"}>
          <Skeleton />
        </Typography>
      )}
    </>
  );
};

export default Details;
