interface MoviesResults {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number | null;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number | null;
  vote_count: number | null;
  video: boolean | false;
  vote_average: number | null;
}

interface MoviesData {
  page: number;
  results: MoviesResults[];
  dates: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
}

export { MoviesResults, MoviesData };
