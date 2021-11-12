type Payload = MoviesData | Error | null;

export interface FetchStartAction {
  type: string;
  payload?: null;
}
// standardize the payload as an object to make more extensible
export interface FetchSuccessAction {
  type: string;
  payload: MoviesData;
}

export interface FetchErrorAction {
  type: string;
  payload?: Error | string;
}

export interface SetCurrentPage {
  type: string;
  payload?: number | undefined;
}

export interface SetCurrentPathName {
  type: string;
  payload: string;
}

export type FetchActions =
  | FetchStartAction
  | FetchSuccessAction
  | FetchErrorAction
  | SetCurrentPage
  | SetCurrentPathName;
