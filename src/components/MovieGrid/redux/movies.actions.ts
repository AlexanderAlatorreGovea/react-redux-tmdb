import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

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
import { Result } from "../models/Result";
import { RootState } from "../../../store/store";

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

export const resetPage = (): SetCurrentPage => {
  const INITIAL_PAGE = 1;

  return {
    type: SET_CURRENT_PAGE,
    payload: INITIAL_PAGE,
  };
};

export const setNextPage = (
  page: number,
  dispatch: Dispatch<any>,
  currentPathName: string
): SetCurrentPage => {
  const incrementPageNumber = page + 1;

  dispatch(fetchMovies(currentPathName, incrementPageNumber));

  return {
    type: SET_CURRENT_PAGE,
    payload: incrementPageNumber,
  };
};

export const setPreviousPage = (
  page: number,
  dispatch: Dispatch<any>,
  currentPathName: string
): SetCurrentPage => {
  const decrementPageNumber = page - 1;

  dispatch(fetchMovies(currentPathName, decrementPageNumber));

  return {
    type: SET_CURRENT_PAGE,
    payload: decrementPageNumber,
  };
};

export const setCurrentPathName = (pathName: string): SetCurrentPathName => ({
  type: SET_CURRENT_PATH_NAME,
  payload: pathName,
});

export const fetchMovies = (
  currentPathName: string,
  pageNumber: number = 1
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const state = getState();
    const previousPathName = state.movies.pathName;
    const currentPageNumber = getCurrentPageNumber(
      currentPathName,
      previousPathName,
      pageNumber
    );

    if (previousPathName !== currentPathName) {
      dispatch(resetPage());
    }

    dispatch(fetchMoviesStart());
    dispatch(setCurrentPathName(currentPathName));

    try {
      const movieType = pathnameToMovieType(currentPathName, currentPageNumber);
      const result = await fetchData(movieType, Error.fetchErrors);
      const movies = new Result(result);

      dispatch(fetchMoviesSuccess(movies));
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
      dispatch(fetchMoviesFailure(errorMessage));
    }
  };
};
