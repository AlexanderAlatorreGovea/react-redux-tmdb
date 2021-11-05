import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
import { MoviesData } from "./models/MovieModel";
import { fetchMovies } from "./movies.actions";

const ERROR_MESSAGE = "oops something went wrong";

const MovieGrid: React.FC<MoviesData> = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, errorMessage } = useSelector(
    (state: RootState) => state.movies
  ); 
  useEffect(() => {
    dispatch(
      fetchMovies(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1",
        ERROR_MESSAGE
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
