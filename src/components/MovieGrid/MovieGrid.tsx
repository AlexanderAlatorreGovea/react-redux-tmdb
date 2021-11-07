import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
import { fetchMovies } from "./redux/movies.actions";

import { errors as Erorrs } from "../../config/errors";

import "./MovieGrid.css";

const MovieGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, errorMessage } = useSelector(
    (state: RootState) => state.movies
  );
  let { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchMovies(pathname, Erorrs.fetchErrors.GENERIC));
  }, [dispatch, pathname]);

  return (
    <div className="movie-grid">
      {isFetching && <div>loading...</div>}
      {movies && <MovieCard movies={movies?.results} />}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default MovieGrid;
