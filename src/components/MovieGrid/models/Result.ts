import { Dates, MoviesData, MoviesResults } from "../types/Movie";
import { Movie } from "./Movie";
import { TypeChecker } from "../../../utils/_TypeChecker";

export class Result {
  private _getResults: <T>(value: T) => T;
  private _getDates: <T>(value: T) => T;
  public readonly page: number;
  public readonly results: Record<string, MoviesResults>;
  public readonly dates: Dates;
  public readonly total_pages: number;
  public readonly total_results: number;

  constructor(data: MoviesData | any = {}) {
    this._getResults = TypeChecker.checkValue("array", [], "results");
    this._getDates = TypeChecker.checkValue("object", {}, "dates");
    this.page = data?.page || 0;
    this.results = this._getResults(data?.results).map(
      (movie: MoviesResults) => new Movie(movie)
    );
    this.dates = this._getDates(data.dates);
    this.total_pages = data?.total_pages || 0;
    this.total_results = data?.total_results || 0;
  }
}
