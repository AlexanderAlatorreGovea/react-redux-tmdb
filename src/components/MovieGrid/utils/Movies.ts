import { MoviesData } from "../models/MovieModel";

export const Movies = ({
  page = 1,
  results = [],
  dates = {
    maximum: "",
    minimum: "",
  },
  total_pages = 0,
  total_results = 0,
}: MoviesData) => {
  const [movieData] = results;

  const poster_path = movieData.poster_path || "";
  const adult = movieData.adult || "";
  const overview = movieData.overview || "";
  const release_date = movieData.release_date || "";
  const genre_ids = movieData.genre_ids || "";
  const id = movieData.id || "";
  const original_title = movieData.original_title || "";
  const original_language = movieData.original_language || "";
  const title = movieData.title || "";
  const backdrop_path = movieData.backdrop_path || "";
  const popularity = movieData.popularity || "";
  const vote_count = movieData.vote_count || "";
  const video = movieData.video || "";
  const vote_average = movieData.vote_average || "";

  return {
    page,
    results: [
      {
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
      },
    ],
    dates,
    total_pages,
    total_results,
  };
};
