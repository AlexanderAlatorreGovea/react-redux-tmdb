import { images as ImageConfig } from "../../config/images";
import { MovieCardProps } from "./types/MovieCard";
import { MoviesResults } from "../MovieGrid/types/Movie";

import { truncateTitle } from "./utils/truncateString";

import "./MovieCard.css";

const MovieCard = ({ movies }: MovieCardProps) => {
  return (
    <>
      {movies.map(
        ({
          poster_path,
          id,
          title,
          vote_average,
          vote_count,
        }: MoviesResults) => {
          const truncatedTitle = truncateTitle(title);

          return (
            <div className="movie-card" key={id}>
              <img
                src={`${ImageConfig.base_url}${ImageConfig.poster_sizes.MEDIUM_LARGE}${poster_path}`}
                alt={title}
              />
              <p>{truncatedTitle}</p>
              <p>Average vote: {vote_average}</p>
              <p>Total votes: {vote_count}</p>
            </div>
          );
        }
      )}
    </>
  );
};

export { MovieCard };
