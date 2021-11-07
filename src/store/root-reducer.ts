import { combineReducers } from "redux";
import moviesReducer from "../components/MovieGrid/redux/movies.reducers";

export default combineReducers({
  movies: moviesReducer,
});
