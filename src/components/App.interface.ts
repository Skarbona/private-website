import { ConnectedProps } from "react-redux";

import { menuEpic } from "../store/menu/epic";
import { connector } from "./App";
import { MenuItem } from "../store/menu/initialState.interface";
import { portfolioEpic } from "../store/elements/epic";

export interface AppDispatchInterface {
  menuEpic: typeof menuEpic;
  portfolioEpic: typeof portfolioEpic;
}

export interface AppStoreStateInterface {
  menuItems: MenuItem[];
}

export type AppInterface = ConnectedProps<typeof connector> & {};
