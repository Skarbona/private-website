import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { menuInitialState } from "./menu/initialState";
import { Actions, RootState } from "./store.interface";

import reducers from "./reducers";

export const initialRootState: RootState = {
  menu: menuInitialState
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<RootState, Actions, null, AnyAction>(
  reducers,
  initialRootState,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<RootState, Actions>)
  )
);
