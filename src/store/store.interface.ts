import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { MenuInitialState } from "./menu/initialState.interface";
import { MenuActions } from "./menu/action.interface";
import { ElementsActions } from "./elements/action.interface";
import { ElementsInitialState } from "./elements/initialState.interface";

export type Actions = MenuActions | ElementsActions;

export type RootState = {
  menu: MenuInitialState;
  elements: ElementsInitialState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;
