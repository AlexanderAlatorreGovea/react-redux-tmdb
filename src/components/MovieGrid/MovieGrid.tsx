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
  const {pathname} = useLocation();
  const { movies, isFetching, errorMessage } = useSelector(
    (state: RootState) => state.movies
  );

  console.log("location: ", pathname);

  useEffect(() => {
    dispatch(
      fetchMovies(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1",
        Erorrs.fetchErrors.GENERIC
      )
    );
  }, [dispatch]);

  return (
    <div className="movie-grid">
      {isFetching && <div>loading...</div>}
      {movies && <MovieCard movies={movies?.results} />}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default MovieGrid;
