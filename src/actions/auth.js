import { toJson } from "unsplash-js/native"
import { AsyncStorage } from 'react-native'

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
		await AsyncStorage.setItem('authenticatedUser', JSON.stringify(user));

		dispatch({
        	type: LOGIN,
        	payload: { user },
      	})
	}
}
export const logout = () => {
	return async dispatch => {
		try {
			await fetch('https://unsplash.com/logout')
			await AsyncStorage.removeItem('authenticatedUser');
			dispatch({
				type: LOGOUT,
				payload: { user: null }
			});
		} catch(error) {
			dispatch ({
				type: LOGOUT,
				payload: { user, error },
			});
		}
	}	
	
}