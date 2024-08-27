import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getPhoto } from "../../models/photos.models"
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const variants = ["h3", "body1", "body1"];
const PhotosDetails = () => {
  const [photo, setPhoto] = useState();
  const { setAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getPhoto(id).then((res) => {
      setPhoto(res);
    });
  }, [id]);

  useEffect(() => {
    setAppTitle("Photo Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Photos details</Title>
      {photo ? (
        <div>  
          <Typography component={"P"} variant="body1">TITLE : {photo.title}</Typography>
          <Typography component={"p"} variant="body1">URL :<Link to={photo.url}> {photo.url}</Link></Typography>
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

export default PhotosDetails;
