import { useEffect } from "react";
import Title from "../../components/Title/Title";
import { Box, Paper, styled } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useAppContext } from "../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/actions/photos.action";
import { Link } from "react-router-dom";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

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
      <Box sx={{ minHeight: 829 }}>
        <Masonry columns={3} spacing={2}>
          {photos.map((item) => (
            <Link to={"/photos/" + item.id} key={item.id}>
              <img
                src={`${item.thumbnailUrl}`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
              <Label>{item.title}</Label>
            </Link>
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default Photos;
