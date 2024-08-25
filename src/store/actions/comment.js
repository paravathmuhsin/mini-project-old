import { getComments } from "../../models/comment.model";
import { GET_COMMENTS } from "../types/comment.type";

const getCommentsAction = (data) => ({ type:GET_COMMENTS , payload: data });

export const fetchComments = () => (dispatch) => {
  getComments().then((res) => {
    dispatch(getCommentsAction(res));
  });
};