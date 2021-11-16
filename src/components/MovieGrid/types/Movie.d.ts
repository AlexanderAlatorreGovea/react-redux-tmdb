interface MoviesResults {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id?: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video: boolean | false;
  vote_average?: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

interface MoviesData {
  page: number;
  results: MoviesResults[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export { Dates, MoviesResults, MoviesData };
