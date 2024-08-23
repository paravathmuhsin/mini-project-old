import { GET_POSTS } from "../types/post.type";

const initialValue = {
  posts: [],
};

const postReducer = (state = initialValue, action) => {
  if (action.type === GET_POSTS) {
    return { posts: action.payload };
  }
  return state;
};

export default postReducer;
