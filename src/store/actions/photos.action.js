import { getPhotos} from "../../models/photos.models";
import { GET_PHOTOS } from "../types/photo.type";

const getPhotosAction = (data) => ({ type: GET_PHOTOS, payload: data });

export const fetchPhotos = () => (dispatch) => {
    getPhotos({first:2}).then((res) => {
    dispatch(getPhotosAction(res));
  });
};
