import axios from "../utils/axios";

export const getPhotos = () => axios.get("/photos").then((res) => res.data);
export const getPhoto = (id) =>
  axios.get("/photos/" + id).then((res) => res.data);