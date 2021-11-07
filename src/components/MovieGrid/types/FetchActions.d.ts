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

export type FetchActions =
  | FetchStartAction
  | FetchSuccessAction
  | FetchErrorAction;
