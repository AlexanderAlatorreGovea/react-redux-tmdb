import { FetchActions } from "../types/FetchActions";
import { MoviesData } from "../types/Movie";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movies.events";
import { Movie } from "../utils/Movies";

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

const moviesReducer = (state = initalState, action: FetchActions) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_MOVIES_SUCCESS:
      const movies = action.payload;
      return {
        ...state,
        movies: {
          ...movies,
          page: movies?.page || 0,
          results: movies?.results.map((movie: any) => new Movie(movie)),
          dates: movies?.dates || {},
          total_pages: movies?.total_pages || 0,
          total_results: movies?.total_results || 0,
        },
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
