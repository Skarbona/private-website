import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { MenuInitialState } from "./menu/initialState.interface";

export type RootState = MenuInitialState;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;
