import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
import { fetchMovies } from "./redux/movies.actions";

import "./MovieGrid.css";

const MovieGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, errorMessage, page } = useSelector(
    (state: RootState) => state.movies
  );
  const { pathname: currentPathName } = useLocation();

  const getMemoizedMovies = useCallback(() => {
    dispatch(fetchMovies(currentPathName, page));
  }, [currentPathName, dispatch, page]);

  useEffect(() => {
    getMemoizedMovies();
  }, [getMemoizedMovies]);

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
