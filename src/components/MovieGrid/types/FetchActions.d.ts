type Payload = MoviesData | Error | null;

export interface FetchStartAction {
  type: string;
  payload?: null;
}
export interface FetchSuccessAction {
  type: string;
  payload: MoviesData;
}

export interface FetchErrorAction {
  type: string;
  payload: Error | null | string;
}

export interface SetCurrentPage {
  type: string;
  payload: number;
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
