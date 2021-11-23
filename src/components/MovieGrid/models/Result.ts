import { Dates, MoviesData, MoviesResults } from "../types/Movie";
import { Movie } from "./Movie";
import { TypeChecker } from "../../../utils/_TypeChecker";

export class Result extends TypeChecker {
  page: number;
  results: MoviesResults[];
  dates: Dates | any;
  total_pages: number;
  total_results: number;

  constructor(data: MoviesData | any = {}) {
    super();
    this.page = data?.page || 0;
    this.results = this.checkValue("array", [], "results", data.results).map(
      (movie: MoviesResults) => new Movie(movie)
    );
    this.dates = this.checkValue("object", {}, "dates", data.dates);
    this.total_pages = data?.total_pages || 0;
    this.total_results = data?.total_results || 0;
  }
}
