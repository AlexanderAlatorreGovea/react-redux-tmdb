import React from "react";
import { MoviesResults } from "../MovieGrid/models/MovieModel";

import "./MovieCard.css";

const MovieCard = ({ movies }: MoviesResults[]) => {
  console.log("movies ---", movies);
  return (
    <div className="movie-card">
      {movies.map(({ poster_path, id, title }: MoviesResults) => {
        return (
          <div key={id}>
            <img src={poster_path} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
