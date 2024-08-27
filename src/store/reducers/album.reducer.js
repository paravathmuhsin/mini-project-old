import { GET_ALBUMS } from "../types/album.type";

const initialValue = {
  albums: [],
};

const albumReducer = (state = initialValue, action) => {
  if (action.type === GET_ALBUMS) {
    return { albums: action.payload };
  }
  return state;
};

export default albumReducer;