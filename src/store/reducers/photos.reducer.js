import { GET_PHOTOS } from "../types/photo.type";

const initialValue = {
  photos: [],
};

const photosReducer = (state = initialValue, action) => {
  if (action.type === GET_PHOTOS) {
    return { photos: action.payload };
  }
  return state;
};

export default photosReducer;