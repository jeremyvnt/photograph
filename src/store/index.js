import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reactNavigationRedux from './middlewares/react-navigation-redux'

/* Import all reducers */
import nav from "../reducers/nav"
import home from "../reducers/home"
import auth from "../reducers/auth"
import search from "../reducers/search";

const middlewares = [
  thunk,
  reactNavigationRedux
];

const store = createStore(
  combineReducers({ nav, home, auth, search}),
  applyMiddleware(...middlewares)
);

export default store;
