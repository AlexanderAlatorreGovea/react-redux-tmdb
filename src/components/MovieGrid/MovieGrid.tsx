import React, { useEffect } from "react";

import MovieCard from "../MovieCard";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { fetchMovies } from "./movies.actions";

const ERROR_MESSAGE = "oops something went wrong";

const MovieGrid: React.FC = () => {
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
      <MovieCard />
    </div>
  );
};

export default MovieGrid;
