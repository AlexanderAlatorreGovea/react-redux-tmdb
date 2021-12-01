import { MoviesResults } from "../types/Movie";
import { TypeChecker } from "../../../utils/_TypeChecker";

export class Movie extends TypeChecker {
  public readonly genre_ids?: number[];
  public readonly title: string;
  public readonly poster_path?: string | null;
  public readonly adult: boolean;
  public readonly overview: string | undefined;
  public readonly release_date: string;
  public readonly id?: number;
  public readonly original_title: string;
  public readonly original_language: string;
  public readonly backdrop_path?: string;
  public readonly popularity?: number;
  public readonly vote_count?: number;
  public readonly video?: boolean;
  public readonly vote_average?: number;

  constructor(data: MoviesResults) {
    super();
    this.poster_path = data?.poster_path || null;
    this.title = data?.title || "";
    this.id = data?.id || 0;
    this.adult = data?.adult || false;
    this.overview = data?.overview || "";
    this.release_date = data?.release_date || "";
    this.genre_ids = this.checkValue("array", [], "genre_ids", data.genre_ids);
    this.original_title = data?.original_title || "";
    this.original_language = data?.original_language || "";
    this.backdrop_path = data?.backdrop_path || "";
    this.popularity = data?.popularity || 0;
    this.vote_count = data?.vote_count || 0;
    this.video = data?.video || false;
    this.vote_average = data?.vote_average || 0;
  }
}
