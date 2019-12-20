import { combineReducers, Reducer } from "redux";

import menu from "./menu/reducer";
import {RootState} from "./store.interface";

const reducers: Reducer<RootState> = combineReducers<RootState>({
    menu,
});

export default reducers;