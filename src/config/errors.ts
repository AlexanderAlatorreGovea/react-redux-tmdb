import { FETCH_ERRORS, ROUTING_ERRORS } from "./enums/errors";
import { ERRORS } from "./types/errors";

export const errors: ERRORS = {
  pathErrors: ROUTING_ERRORS.NOT_FOUND,
  fetchErrors: FETCH_ERRORS.GENERIC,
};
