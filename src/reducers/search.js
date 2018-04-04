import { Dimensions } from 'react-native'

import { 
  ORDER_BY_LATEST,
  SEARCH_LOADING_PHOTOS_LIST,
  SEARCH_LOADING_PHOTOS_LIST_SUCCESS,
  SEARCH_LOADING_PHOTOS_LIST_FAILED,
  SEARCH_LOADING_COLLECTIONS_LIST,
  SEARCH_LOADING_COLLECTIONS_LIST_FAILED,
  SEARCH_LOADING_COLLECTIONS_LIST_SUCCESS,
  SEARCH_LOADING_USERS_LIST,
  SEARCH_LOADING_USERS_LIST_FAILED,
  SEARCH_LOADING_USERS_LIST_SUCCESS
} from "../utils/constants";


import createReducer from './create-reducer'

const initialState = {
  photos: [],
  collections: [],
  users: [],
  totalPhotos: 0,
  totalCollections: 0,
  totalUsers: 0,
  isLoading: false,
  text: '',
  dimensions: Dimensions.get('window')
};

const handlers = {};
// PHOTOS LIST
handlers[SEARCH_LOADING_PHOTOS_LIST] = (state, action) => ({
  ...state,
  isLoading: true,
  text: action.text
});

handlers[SEARCH_LOADING_PHOTOS_LIST_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  photos: action.page === 1 ? action.photos.results : state.photos.concat(action.photos.results),
  totalPhotos: action.photos.total,
  text: action.text
});

handlers[SEARCH_LOADING_PHOTOS_LIST_FAILED] = (state, action) => ({
  ...state,
  isLoading: false,
  text: action.text,
  error: action.error
});

// COLLECTIONS LIST
handlers[SEARCH_LOADING_COLLECTIONS_LIST] = (state, action) => ({
  ...state,
  isLoading: true,
  text: action.text,
});

handlers[SEARCH_LOADING_COLLECTIONS_LIST_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  collections: action.page === 1 ? action.collections.results : state.photos.concat(action.collections.results),
  totalCollections: action.collections.total,
  text: action.text
});

handlers[SEARCH_LOADING_COLLECTIONS_LIST_FAILED] = (state, action) => ({
  ...state,
  isLoading: false,
  text: action.text,
  error: action.error
})

// USERS LIST
handlers[SEARCH_LOADING_USERS_LIST] = (state, action) => ({
  ...state,
  isLoading: true,
  text: action.text
});

handlers[SEARCH_LOADING_USERS_LIST_SUCCESS] = (state, action) => ({
  ...state,
  isLoading: false,
  users: action.page === 1 ? action.users.results : state.photos.concat(action.users.results),
  totalUsers: action.users.total,
  text: action.text
});

handlers[SEARCH_LOADING_USERS_LIST_FAILED] = (state, action) => ({
  ...state,
  isLoading: false,
  text: action.text,
  error: action.error
})

export default createReducer(initialState, handlers);
