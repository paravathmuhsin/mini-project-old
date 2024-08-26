import axios from "../utils/axios";

export const getPosts = () => axios.get("/posts").then((res) => res.data);
export const getPost = (id) =>
  axios.get("/posts/" + id).then((res) => res.data);
export const getAlbums = () => axios.get("/albums").then((res) => res.data);
export const getAlbum = (id) =>
  axios.get("/albums/" + id).then((res) => res.data);
