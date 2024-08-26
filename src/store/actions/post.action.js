import { getAlbums } from "../../models/post.model";
import { GET_POSTS } from "../types/post.type";

const getPostsAction = (data) => ({ type: GET_POSTS, payload: data });

export const fetchPosts = () => (dispatch) => {
  getAlbums().then((res) => {
    dispatch(getPostsAction(res));
  });
};
