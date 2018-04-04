import { Dimensions } from 'react-native'

import { 
  ORDER_BY_LATEST,
  LOADING_PHOTOS_LIST,
  LOADING_PHOTOS_LIST_SUCCESS,
  LOADING_PHOTOS_LIST_FAILED,
  LOAD_PHOTO_SUCCESS,
  LOAD_PHOTO_FAILED,
  HIDE_MODAL_DETAIL_PHOTO,
  LIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_FAILED,
  UNLIKE_PHOTO_FAILED
} from "../utils/constants";

import createReducer from './create-reducer'

const initialState = {
  photos: null,
  isLoading: false,
  category: ORDER_BY_LATEST,
  dimensions: Dimensions.get('window'),
};

const handlers = {};

handlers[LOADING_PHOTOS_LIST] = (state, action) => ({
  ...state,
  isLoading: true,
  category: action.category
});

handlers[LOADING_PHOTOS_LIST_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  photos: action.photos,
  category: action.category
});

handlers[LOADING_PHOTOS_LIST_FAILED] = (state, action) => ({
  ...state,
  isLoading: false,
  category: action.category,
  error: action.error
})

handlers[LOAD_PHOTO_SUCCESS] = (state, action) => ({
  ...state,
  photos: state.photos.map(p => {
    return (p.id === action.photo.id) ? action.photo : p
  })
})

handlers[LIKE_PHOTO_SUCCESS] = (state, action) => ({
  ...state,
  photos: state.photos.map(p => {
    return (p.id === action.photo.id) ? action.photo : p
  })
})

handlers[UNLIKE_PHOTO_SUCCESS] = (state, action) => ({
  ...state,
  photos: state.photos.map(p => {
    return (p.id === action.photo.id) ? action.photo : p
  })
})

handlers[LOAD_PHOTO_FAILED] = (state, action) => ({
  ...state,
})

handlers[HIDE_MODAL_DETAIL_PHOTO] = (state, action) => ({
  ...state,
})

export default createReducer(initialState, handlers);
