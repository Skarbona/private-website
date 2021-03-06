import { combineReducers, Reducer } from "redux";

import menu from "./menu/reducer";
import elements from "./elements/reducer";
import { RootState } from "./store.interface";

const reducers: Reducer<RootState> = combineReducers<RootState>({
  menu,
  elements
});

export default reducers;
