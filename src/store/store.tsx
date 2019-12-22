import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import reducers from "./reducers";
import { menuInitialState } from "./menu/initialState";
import { Actions, RootState } from "./store.interface";
import { elementsInitialState } from "./elements/initialState";

export const initialRootState: RootState = {
  menu: menuInitialState,
  elements: elementsInitialState
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<RootState, Actions, null, AnyAction>(
  reducers,
  initialRootState,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<RootState, Actions>)
  )
);
