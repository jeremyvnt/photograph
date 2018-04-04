import Unsplash from "unsplash-js/native";
import { APP_ID, APP_SECRET, CALLBACK_URL } from "./config";

import { UNSPLASH_SCOPE } from './constants'

export const unsplash = new Unsplash({
  applicationId: APP_ID,
  secret: APP_SECRET,
  callbackUrl: CALLBACK_URL,
  bearerToken: "",
  //headers
});

export const authUrl = unsplash.auth.getAuthenticationUrl(UNSPLASH_SCOPE)