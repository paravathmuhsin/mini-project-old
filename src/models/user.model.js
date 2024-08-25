import axios from "../utils/axios";

export const getUsers = () => axios.get("/users").then((res) => res.data);
export const getUser = (id) => axios.get(`/users/${id}`).then((res) => res.data);
