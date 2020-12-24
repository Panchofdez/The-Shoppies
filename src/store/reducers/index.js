import { combineReducers } from "redux";
import movies from "./movies";
import nominations from "./nominations";
import showMovie from "./showMovie";

const rootReducer = combineReducers({
  movies,
  nominations,
  showMovie,
});

export default rootReducer;
