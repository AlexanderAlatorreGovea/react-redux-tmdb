import { Dispatch } from "react";

export interface SetPage {
  currentPage: number;
  currentPathName: string;
  dispatch: Dispatch<any>;
}
