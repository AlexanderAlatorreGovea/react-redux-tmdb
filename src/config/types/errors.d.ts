import { FETCH_ERRORS, ROUTING_ERRORS } from "../enums/errors";

export interface ERRORS {
  pathErrors: ROUTING_ERRORS;
  fetchErrors: FETCH_ERRORS;
}
