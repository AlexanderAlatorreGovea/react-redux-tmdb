import KEYS from '../enums/keys';

export interface Images {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    ORIGINAL: string;
  };
  logo_sizes: {
    EXTRA_SMALL: string;
    SMALL: string;
    MEDIUM: string;
    MEDIUM_LARGE: string;
    LARGE: string;
    EXTRA_LARGE: string;
    ORIGINAL: string;
  };
  poster_sizes: {
    EXTRA_SMALL: string;
    SMALL: string;
    MEDIUM: string;
    MEDIUM_LARGE: string;
    LARGE: string;
    EXTRA_LARGE: string;
    ORIGINAL: string;
  };
  profile_sizes: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    ORIGINAL: string;
  };
  still_sizes: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string; 
    ORIGINAL: string;
  };
  change_keys: KEYS;
}
