import {
  FetchErrorAction,
  FetchStartAction,
  FetchSuccessAction,
} from "./models/FetchActionModel";
import { MoviesData } from "./models/MovieModel";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movies.events";
import { fetchData } from "./utils/fetchMovies";
import { Movies } from "./utils/Movies";

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

export const fetchMovies = (url: string, errorMessage: string) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    dispatch(fetchMoviesStart());

    try {
      const movies = await fetchData(url, errorMessage);
    
      dispatch(fetchMoviesSuccess(movies));
    } catch (error: any) {
      const errorMessage = error?.status_message;
      console.error(errorMessage);
      dispatch(fetchMoviesFailure(errorMessage));
    }
  };
};
