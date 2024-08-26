import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton, Typography, Paper, Grid } from "@mui/material";
import { fetchUser } from "../../store/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { setAppTitle } = useAppContext();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser(id)).then(() => setLoading(false));
  }, [id, dispatch]);

  useEffect(() => {
    setAppTitle("User Details");
  }, [setAppTitle]);

  
  const lat = user?.address?.geo?.lat ? parseFloat(user.address.geo.lat) : null;
  const lng = user?.address?.geo?.lng ? parseFloat(user.address.geo.lng) : null;

  if (loading) {
    return (
      <Paper sx={{ p: 2 }}>
        <Skeleton variant="text" height={60} />
        <Skeleton variant="text" height={60} />
        <Skeleton variant="text" height={60} />
      </Paper>
    );
  }

  return (
    <>
      <Title>User Details</Title>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {lat && lng ? (
              <MapContainer
                center={[lat, lng]}
                zoom={13}
                style={{ height: "300px", width: "100%" }} // Ensure height and width are defined
              >
                <Marker position={[lat, lng]}>
                  <Popup>
                    <div>
                      <strong>{user.name}</strong><br />
                      {user.address.street}, {user.address.suite}<br />
                      {user.address.city}<br />
                      {user.address.zipcode}
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <Typography variant="body1">
                Location data is not available.
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Name: {user.name}</Typography>
            <Typography variant="body1">Username: {user.username}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Phone: {user.phone}</Typography>
            <Typography variant="body1">Website: {user.website}</Typography>
            <Typography variant="body1">
              {/* Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode} */}
            </Typography>
            <Typography variant="body1">Company: {user.company.name}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default UserDetails;
