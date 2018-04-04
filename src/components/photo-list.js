import React from "react";

import {
  ORDER_BY_LATEST,
  ORDER_BY_POPULAR,
  ORDER_BY_OLDEST
} from "../utils/constants";


import PhotoPreview from './photo-preview';
import makeList from './list'

export default makeList(PhotoPreview);
