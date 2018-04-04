import {
  LOADING_PHOTOS_LIST,
  SEARCH_LOADING_PHOTOS_LIST,
  SEARCH_LOADING_PHOTOS_LIST_SUCCESS,
  LOADING_PHOTOS_LIST_SUCCESS,
  LOADING_PHOTOS_LIST_FAILED,
  SEARCH_LOADING_PHOTOS_LIST_FAILED,
  SEARCH_LOADING_COLLECTIONS_LIST,
  SEARCH_LOADING_COLLECTIONS_LIST_FAILED,
  SEARCH_LOADING_COLLECTIONS_LIST_SUCCESS,
  SEARCH_LOADING_USERS_LIST,
  SEARCH_LOADING_USERS_LIST_FAILED,
  SEARCH_LOADING_USERS_LIST_SUCCESS
} from "../utils/constants";
import { unsplash } from "../utils/unsplash";
import { toJson } from "unsplash-js/native";

import newPhotos from '../fixtures/new-photos'
import oldPhotos from '../fixtures/old-photos'
import trendingPhotos from '../fixtures/trending-photos'

const fetchListPhotos = (text, page) => {
  return async dispatch => {
    dispatch({
      type: SEARCH_LOADING_PHOTOS_LIST,
      text
    });

    try {
      const photos = await unsplash.search.photos(text, page, 30).then(toJson);
      dispatch({
        type: SEARCH_LOADING_PHOTOS_LIST_SUCCESS,
        text,
        page,
        photos
      });
    } catch (error) {
      dispatch({
        type: SEARCH_LOADING_PHOTOS_LIST_FAILED,
        text,
        error
      });
    }
  };
};



const fetchListCollections = (text, page) => {
  return async dispatch => {
    dispatch({
      type: SEARCH_LOADING_COLLECTIONS_LIST,
      text
    });

    try {
      const collections = await unsplash.search.collections(text, page, 30).then(toJson);

      dispatch({
        type: SEARCH_LOADING_COLLECTIONS_LIST_SUCCESS,
        text,
        page,
        collections
      });
    } catch (error) {
      dispatch({
        type: SEARCH_LOADING_COLLECTIONS_LIST_FAILED,
        text,
        error
      });
    }
  };
};

const fetchListUsers = (text, page) => {
  return async dispatch => {
    dispatch({
      type: SEARCH_LOADING_USERS_LIST,
      text
    });

    try {
      const users = await unsplash.search.users(text, page, 30).then(toJson);
      dispatch({
        type: SEARCH_LOADING_USERS_LIST_SUCCESS,
        text,
        page,
        users
      });
    } catch (error) {
      dispatch({
        type: SEARCH_LOADING_USERS_LIST_FAILED,
        text,
        error
      });
    }
  };
};

export {fetchListPhotos, fetchListCollections, fetchListUsers };
