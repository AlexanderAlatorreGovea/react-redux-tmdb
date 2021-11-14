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
import { getCurrentPageNumber } from "../utils/getCurrentPageNumber";

import { errors as Error } from "../../../config/errors";

export const fetchMoviesStart = (): FetchStartAction => ({
  type: FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies: MoviesData): FetchSuccessAction => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (errorMessage: string): FetchErrorAction => ({
  type: FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

export const setCurrentPage = (page: number | undefined): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setNextPage = (page: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload: page + 1,
});

export const setPreviousPage = (page: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload: page - 1,
});

export const setCurrentPathName = (pathName: string): SetCurrentPathName => ({
  type: SET_CURRENT_PATH_NAME,
  payload: pathName,
});

export const fetchMovies = (currentPathName: string, pageNumber: number) => {
  return async (dispatch: (arg0: { type: string }) => void, getState: any) => {
    const state = getState();
    const previousPathName = state.movies.pathName;

    const currentPageNumber = getCurrentPageNumber(
      currentPathName,
      previousPathName,
      pageNumber
    );

    if (previousPathName !== currentPathName) {
      dispatch(setCurrentPage(1));
    }

    dispatch(fetchMoviesStart());
    dispatch(setCurrentPathName(currentPathName));

    try {
      const movieType = await pathnameToMovieType(currentPathName, currentPageNumber);
      const movies = await fetchData(movieType, Error.fetchErrors.GENERIC);

      dispatch(fetchMoviesSuccess(movies));
    } catch (error: any) {
      const errorMessage = error?.message;
      console.error(errorMessage);
      dispatch(fetchMoviesFailure(errorMessage));
    }
  };
};
