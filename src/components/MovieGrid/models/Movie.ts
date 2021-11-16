import { MoviesResults } from "../types/Movie";

export class Movie {
  public genre_ids?: number[];
  public title: string;
  public poster_path?: string | null;
  public adult: boolean;
  public overview: string | undefined; 
  public release_date: string;
  public id?: number;
  public original_title: string;
  public original_language: string;
  public backdrop_path?: string;
  public popularity?: number;
  public vote_count?: number;
  public video?: boolean;
  public vote_average?: number;

  constructor(data: MoviesResults) {
    this.poster_path = data?.poster_path || null;
    this.title = data?.title || "";
    this.id = data?.id || 0;
    this.adult = data?.adult || false;
    this.overview = data?.overview || "";
    this.release_date = data?.release_date || "";
    this.genre_ids = Array.isArray(data?.genre_ids) ? data.genre_ids : [];
    this.original_title = data?.original_title || "";
    this.original_language = data?.original_language || "";
    this.backdrop_path = data?.backdrop_path || "";
    this.popularity = data?.popularity || 0;
    this.vote_count = data?.vote_count || 0;
    this.video = data?.video || false;
    this.vote_average = data?.vote_average || 0;
  }
}
