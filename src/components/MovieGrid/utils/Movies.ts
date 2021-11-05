import { MoviesResults } from "../models/MovieModel";

export const Movies = (movie: MoviesResults): MoviesResults => {
  const poster_path = movie.poster_path || "";
  const adult = movie.adult || false;
  const overview = movie.overview || "";
  const release_date = movie.release_date || "";
  const genre_ids = movie.genre_ids || [];
  const id = movie.id || null;
  const original_title = movie.original_title || "";
  const original_language = movie.original_language || "";
  const title = movie.title || "";
  const backdrop_path = movie.backdrop_path || "";
  const popularity = movie.popularity || null;
  const vote_count = movie.vote_count || null;
  const video = movie.video || false;
  const vote_average = movie.vote_average || null;

  return {
    poster_path,
    adult,
    overview,
    release_date,
    genre_ids,
    id,
    original_title,
    original_language,
    title,
    backdrop_path,
    popularity,
    vote_count,
    video,
    vote_average,
  };
};
