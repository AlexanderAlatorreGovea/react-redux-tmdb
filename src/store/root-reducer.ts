import { combineReducers } from "redux";
import moviesReducer from "../components/MovieGrid/movies.reducers";

export default combineReducers({
  movies: moviesReducer,
});
