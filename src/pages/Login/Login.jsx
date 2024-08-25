import  { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setLogin } from "../../store/actions/login.action";

const defaultTheme = createTheme();

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedin } = useSelector((state) => state.login);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = form;
    if (email === "sample@gmail.com" && password === "12345") {
      const user = {
        name: "David",
        email: "sample@gmail.com",
        phone: "999999999",
      };
      localStorage.setItem("isLoggedin", true);
      localStorage.setItem("loggedUser", JSON.stringify(user));
      dispatch(setLogin(user));
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return isLoggedin ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={defaultTheme}>
      {/* Outer Box with background color */}
      <Box
        sx={{
          minHeight: "100vh", // Ensures the Box covers the full viewport height
          backgroundColor: "#e2d9e5", // Replace with your desired outer background color
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2, // Optional: Adds padding around the Container
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            backgroundColor: "#c7b2ce", // Existing background color for the Container
            borderRadius: 2, // Rounded corners
            padding: 6, // Padding inside the Container
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white", // Inner Box background color
              padding: 3, // Padding for the inner Box
              borderRadius: 2, // Rounded corners for the inner Box
              boxShadow: 3, // Box shadow for a subtle 3D effect
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={form.email}
                onChange={changeHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={changeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#753a88",
                  "&:hover": {
                    backgroundColor: "#5e2d6e", // Darker shade on hover
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
