import {
  FetchErrorAction,
  FetchStartAction,
  FetchSuccessAction,
  SetCurrentPage,
  SetCurrentPathName,
} from "../types/FetchActions";

import { MoviesData } from "../types/Movie";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_CURRENT_PAGE,
  SET_CURRENT_PATH_NAME,
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

export const setCurrentPage = (page: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
 
export const setCurrentPathName = (pathName: string): SetCurrentPathName => ({
  type: SET_CURRENT_PATH_NAME,
  payload: pathName,
});

export const fetchMovies = (
  currentPathName: string,
  errorMessage: string,
  currentPageNumber?: number | undefined,
  previousPathName?: string
) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    dispatch(fetchMoviesStart());
    dispatch(setCurrentPathName(currentPathName));

    try {
      const movieType = pathnameToMovieType(currentPathName, currentPageNumber);
      const movies = await fetchData(movieType, errorMessage);
      
      dispatch(setCurrentPage(movies.page))
      dispatch(fetchMoviesSuccess(movies));
    } catch (error: any) {
      const errorMessage = error?.status_message;
      console.error(errorMessage);
      dispatch(fetchMoviesFailure(errorMessage));
    }
  };
};
