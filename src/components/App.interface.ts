import { ConnectedProps } from "react-redux";

import { menuEpic } from "../store/menu/epic";
import { connector } from "./App";
import {MenuItem} from "../store/menu/initialState.interface";

export interface AppDispatchInterface {
  menuEpic: typeof menuEpic;
}

export interface AppStoreStateInterface {
    menuItems: MenuItem[];
}

export type AppInterface = ConnectedProps<typeof connector> & {};
