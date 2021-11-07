import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
import { fetchMovies } from "./redux/movies.actions";

import { errors as Errors } from "../../config/errors";

import "./MovieGrid.css";

const MovieGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, errorMessage } = useSelector(
    (state: RootState) => state.movies
  );
  const { pathname } = useLocation();

  const STARTING_PAGE = 1;

  useEffect(() => {
    dispatch(fetchMovies(pathname, Errors.fetchErrors.GENERIC, STARTING_PAGE));
  }, [dispatch, pathname]);

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
