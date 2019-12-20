import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { MenuInitialState } from "./menu/initialState.interface";
import { MenuActions } from "./menu/action.interface";

export type Actions = MenuActions;

export type RootState = {
    menu: MenuInitialState
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;