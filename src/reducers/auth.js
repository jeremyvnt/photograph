import { 
  INPUT_CHANGE,
  LOGIN,
  LOGOUT
} from "../utils/constants";

import createReducer from './create-reducer'
import { authUrl } from '../utils/unsplash'

const initialState = {
  authUrl,
  user: null,
};

const handlers = {};


handlers[LOGIN] = (state, action) => ({
  ...state,
  user: action.payload.user
});


handlers[LOGOUT] = (state, action) => ({
  ...state,
  user: action.payload.user
});


export default createReducer(initialState, handlers);
