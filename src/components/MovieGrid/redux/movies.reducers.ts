import { FetchActions } from "../types/FetchActions";
import { MoviesData } from "../types/Movie";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_CURRENT_PAGE,
  SET_CURRENT_PATH_NAME,
} from "./movies.events";

interface MovieFetchingState {
  movies: null | MoviesData;
  isFetching: boolean;
  errorMessage: string | Object;
  pathName: string;
  page: number;
}

const initialState: MovieFetchingState = {
  movies: null,
  isFetching: false,
  errorMessage: "",
  pathName: "",
  page: 1,
};

const moviesReducer = (state = initialState, action: FetchActions) => {
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_CURRENT_PATH_NAME:
      return {
        ...state,
        pathName: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
