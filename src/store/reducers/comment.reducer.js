import { GET_COMMENTS} from "../types/comment.type";

const initialValue = {
  comments: [],
};

const commentReducer = (state = initialValue, action) => {
  if (action.type === GET_COMMENTS) {
    return { comments: action.payload };
  }
  return state;
};

export default commentReducer;
