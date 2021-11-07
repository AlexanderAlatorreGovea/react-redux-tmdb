import { KEYS } from "./enums/keys";
import { BACKDROPS, LOGOS, POSTER, PROFILE, STILL } from "./enums/sizes";
import { Images } from "./types/images";

export const images: Images = {
  base_url: "http://image.tmdb.org/t/p/",
  secure_base_url: "https://image.tmdb.org/t/p/",
  backdrop_sizes: BACKDROPS,
  logo_sizes: LOGOS,
  poster_sizes: POSTER,
  profile_sizes: PROFILE,
  still_sizes: STILL,
  change_keys: KEYS,
};
