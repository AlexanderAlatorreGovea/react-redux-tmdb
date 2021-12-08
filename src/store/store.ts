import { createStore, applyMiddleware, Store, EmptyObject } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleware = [thunk, logger];

export const store: Store<
  EmptyObject & 
  any
> = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootProps = ReturnType<typeof rootReducer>;
