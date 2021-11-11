import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
import { fetchMovies, setCurrentPage } from "./redux/movies.actions";

import { errors as Errors } from "../../config/errors";

import "./MovieGrid.css";

const MovieGrid: React.FC = () => {
  const INITIAL_PAGE_NUMBER = 1;
  const dispatch = useDispatch();
  const { movies, isFetching, errorMessage, page } = useSelector(
    (state: RootState) => state.movies
  );
  const { pathname: currentPathName } = useLocation();
  const previousPathName = useSelector(
    (state: RootState) => state.movies.pathName
  );

  useEffect(() => {
    dispatch(
      fetchMovies(
        currentPathName,
        Errors.fetchErrors.GENERIC,
        page,
        previousPathName
      )
    );
    if (previousPathName !== currentPathName) {
      dispatch(setCurrentPage(INITIAL_PAGE_NUMBER));
    }
  }, [currentPathName, dispatch, errorMessage, page, previousPathName]);

  const moviesFinishedLoading = !isFetching && movies;

  return (
    <div className="movie-grid">
      {isFetching && <div>loading...</div>}
      {moviesFinishedLoading && <MovieCard movies={movies?.results} />}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default MovieGrid;
