import {
  FetchErrorAction,
  FetchStartAction,
  FetchSuccessAction,
} from "../types/FetchActions";

import { MoviesData } from "../types/Movie";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movies.events";
import { fetchData } from "../utils/fetchMovies";
import { pathnameToMovieType } from "../utils/pathnameToMovieType";

const fetchMoviesStart = (): FetchStartAction => ({
  type: FETCH_MOVIES_START,
});

const fetchMoviesSuccess = (movies: MoviesData): FetchSuccessAction => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailure = (errorMessage: string): FetchErrorAction => ({
  type: FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

export const fetchMovies = (
  slug: string,
  errorMessage: string,
  pageNumber?: number | undefined
) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    dispatch(fetchMoviesStart());
    
    try {
      const movieType = pathnameToMovieType(slug, pageNumber);
      const movies = await fetchData(movieType, errorMessage);

      dispatch(fetchMoviesSuccess(movies));
    } catch (error: any) {
      const errorMessage = error?.status_message;
      console.error(errorMessage);
      dispatch(fetchMoviesFailure(errorMessage));
    }
  };
};
