import {
  LOAD_PHOTO_SUCCESS,
  LOAD_PHOTO_FAILED,
  LIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_FAILED,
  UNLIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_FAILED,
  DOWNLOAD_PHOTO_SUCCESS,
  DOWNLOAD_PHOTO_FAILED,
  HIDE_MODAL_DETAIL_PHOTO
} from "../utils/constants";
import { unsplash } from "../utils/unsplash";
import { toJson } from "unsplash-js/native";


import { CameraRoll, Alert } from 'react-native'

const likePhoto = id => {
  return async dispatch => {
    try {
      const photo = await unsplash.photos.likePhoto(id).then(toJson);
      dispatch({
        type: LIKE_PHOTO_SUCCESS,
        photo
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: LIKE_PHOTO_FAILED,
        error
      });
    }
  };
};

const unlikePhoto = id => {
  return async dispatch => {
    try {
      const photo = await unsplash.photos.unlikePhoto(id).then(toJson);
      dispatch({
        type: LIKE_PHOTO_SUCCESS,
        photo
      });
    } catch (error) {
      dispatch({
        type: LIKE_PHOTO_FAILED,
        error
      });
    }
  };
};

const downloadPhoto = photo => {
  return async dispatch => {
    try {
      const test = await unsplash.photos.downloadPhoto(photo);
      CameraRoll.saveToCameraRoll(photo.links.download)
      .then(Alert.alert('Success', 'Photo added to camera roll'))
      .catch(Alert.alert('Echec', 'Download failed, please try later'))
      dispatch({
        type: LIKE_PHOTO_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: LIKE_PHOTO_FAILED,
        error
      });
    }
  };
};

const getPhotoDetail = id => {
  return async dispatch => {
    try {
      const photo = await unsplash.photos.getPhoto(id).then(toJson);
      dispatch({
        type: LOAD_PHOTO_SUCCESS,
        photo,
      });
    } catch (error) {
      dispatch({
        type: LOAD_PHOTO_FAILED,
        error
      });
    }
  };
};

export { likePhoto, unlikePhoto, downloadPhoto, getPhotoDetail };
