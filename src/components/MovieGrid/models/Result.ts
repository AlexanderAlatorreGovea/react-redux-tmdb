import { Dates, MoviesData, MoviesResults } from "../types/Movie";
import { typeChecker } from "../../../utils/typeChecker";
import { Movie } from "./Movie";

export class Result {
  page: number;
  results: MoviesResults[];
  dates: Dates | any;
  total_pages: number;
  total_results: number;
  _getDates: (val: unknown) => any;
  _getResults: (val: unknown) => any;

  constructor(data: MoviesData | any = {}) {
    this._getDates = typeChecker("object", {}, "dates");
    this._getResults = typeChecker("array", [], "results");

    this.page = data?.page || 0;
    this.results = this._getResults(data.results).map(
      (movie: MoviesResults) => new Movie(movie)
    );
    this.dates = this._getDates(data.dates);
    this.total_pages = data?.total_pages || 0;
    this.total_results = data?.total_results || 0;
  }
}
