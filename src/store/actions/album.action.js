import { getAlbums } from "../../models/album.model";
import { GET_ALBUMS } from "../types/album.type";

const getAlbumsAction = (data) => ({ type: GET_ALBUMS, payload: data });

export const fetchAlbums = () => (dispatch) => {
  getAlbums().then((res) => {
    dispatch(getAlbumsAction(res));
  });
};