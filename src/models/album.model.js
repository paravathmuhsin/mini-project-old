import axios from "../utils/axios";

export const getPosts = () => axios.get("/albums").then((res) => res.data);
export const getPost = (id) =>
  axios.get("/posts/" + id).then((res) => res.data);
export const getAlbums = () => axios.get("/albums").then((res) => res.data);
