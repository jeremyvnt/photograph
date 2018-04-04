import { toJson } from "unsplash-js/native"

import {
  INPUT_CHANGE,
  LOGIN,
  LOGOUT,
} from "../utils/constants";

import { unsplash } from '../utils/unsplash'


export const handleInputChange = (text, property) => ({
  type: INPUT_CHANGE,
  payload: { text, property },
});


export const handleLogin = (e) => {
	return async dispatch => {
		const json = await unsplash.auth.userAuthentication(e.url.match('[^/]+(?=/$|$)')[0]).then(toJson)
		unsplash.auth.setBearerToken(json.access_token)
		const user = await unsplash.currentUser.profile().then(toJson)

		dispatch({
        	type: LOGIN,
        	payload: { user: user },
      	})
	}
}
export const logout = () => {
	fetch('https://unsplash.com/logout')
	return {
		type: LOGOUT,
		payload: { user: null }
	}
}