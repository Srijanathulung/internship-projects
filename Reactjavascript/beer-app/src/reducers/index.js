import { combineReducers } from "redux";

import dateReducer from "./dateReducer";
import counterReducer from "./counterReducer";
import favouriteBeerReducer from "./favouriteBeerReducer";

const rootReducer = combineReducers({
  counterReducer,
  dateReducer,
  favouriteBeerReducer,
});

export default rootReducer;
