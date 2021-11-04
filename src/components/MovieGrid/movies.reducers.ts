import { FetchActions } from "./models/FetchActionModel";
import { MoviesData } from "./models/MovieModel";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movies.events";

interface MovieFetchingState {
  movies: null | MoviesData;
  isFetching: boolean;
  errorMessage: string | Object;
}

const initalState: MovieFetchingState = {
  movies: null,
  isFetching: false,
  errorMessage: "",
};

const moviesReducer = (
  state = initalState,
  action: FetchActions
) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      }; 
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isFetching: false,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
