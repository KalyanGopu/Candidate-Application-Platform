// reducers/index.js

import { combineReducers } from "redux";
import jobReducer from "./jobReducer";

const rootReducer = combineReducers({
  jobs: jobReducer,
  // Add more reducers if needed
});

export default rootReducer;
