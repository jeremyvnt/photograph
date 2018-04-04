import {
  LOADING_PHOTOS_LIST,
  LOADING_PHOTOS_LIST_SUCCESS,
  LOADING_PHOTOS_LIST_FAILED
} from "../utils/constants";
import { unsplash } from "../utils/unsplash";
import { toJson } from "unsplash-js/native";

import newPhotos from '../fixtures/new-photos'
import oldPhotos from '../fixtures/old-photos'
import trendingPhotos from '../fixtures/trending-photos'

const fetchListPhotos = type => {
  return async dispatch => {
    dispatch({
      type: LOADING_PHOTOS_LIST,
      category: type
    });

    try {
      const photos = await unsplash.photos.listPhotos(1, 24, type).then(toJson);

      /*const photos = type === 'latest' && newPhotos.photos ||
                     type === 'oldest' && oldPhotos.photos ||
                     type === 'popular' && trendingPhotos.photos*/

      dispatch({
        type: LOADING_PHOTOS_LIST_SUCCESS,
        category: type,
        photos
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: LOADING_PHOTOS_LIST_FAILED,
        category: type,
        error
      });
    }
  };
};

export { fetchListPhotos };
