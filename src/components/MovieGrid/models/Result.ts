import { Dates, MoviesData, MoviesResults } from "../types/Movie";
import { typeChecker } from "../../../utils/typeChecker";
import { Movie } from "./Movie";
import { TypeChecker } from "../../../utils/_TypeChecker";

export class Result extends TypeChecker {
  page: number;
  results: MoviesResults[];
  dates: Dates | any;
  total_pages: number;
  total_results: number;
  _getDates: (val: any) => any;
  _getResults: (val1: string, val2: any, val3: string, val4: any) => any | [];

  constructor(data: MoviesData | any = {}) {
    super();

    this._getDates = typeChecker("object", {}, "dates");
    //this._getResults = typeChecker("array", [], "results");
    this._getResults = this.checkValue("array", [], "results", data.results);

    this.page = data?.page || 0;
    // this.results = this._getResults(data.results).map(
    //   (movie: MoviesResults) => new Movie(movie)
    // );
    this.results = this.checkValue("array", [], "results", data.results).map(
      (movie: MoviesResults) => new Movie(movie)
    );
    this.dates = this._getDates(data.dates);
    this.total_pages = data?.total_pages || 0;
    this.total_results = data?.total_results || 0;
  }
}
