import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { getPhoto } from "../../models/photos.models";
import { useAppContext } from "../../components/AppContext/AppContext";
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={photo.url}
            title={photo.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {photo.title}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "57%" }} />
          </Skeleton>
          <Skeleton width="100%">
            <Typography variant="h5" component="div">
              .
            </Typography>
          </Skeleton>
        </Card>
      )}
    </>
  );
};

export default PhotosDetails;
