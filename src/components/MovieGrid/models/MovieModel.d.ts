interface MoviesResults {
  poster_path: string | undefined;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number | null;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | undefined;
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
