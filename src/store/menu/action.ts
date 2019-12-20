import { ActionCreator } from "redux";

import { MenuActionEnum } from "./enum";
import * as I from "./action.interface";
import { MenuItem } from "./initialState.interface";

export const fetchMenuInit: ActionCreator<I.IFetchMenuInit> = () => ({
  type: MenuActionEnum.FetchMenuInit
});

export const fetchMenuSuccess: ActionCreator<I.IFetchMenuSuccess> = (
  menuItems: MenuItem[]
) => ({
  type: MenuActionEnum.FetchMenuSuccess,
  payload: menuItems
});

export const fetchMenuFail: ActionCreator<I.IFetchMenuFail> = () => ({
  type: MenuActionEnum.FetchMenuFail
});
