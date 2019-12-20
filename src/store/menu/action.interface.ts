import { MenuActionEnum } from "./enum";
import {MenuItem} from "./initialState.interface";

interface ActionInterface {
    type: MenuActionEnum
}

export interface IFetchMenuInit extends ActionInterface {
    type: MenuActionEnum.FetchMenuInit
}

export interface IFetchMenuSuccess extends ActionInterface {
    type: MenuActionEnum.FetchMenuSuccess
    payload: MenuItem[]
}

export interface IFetchMenuFail extends ActionInterface {
    type: MenuActionEnum.FetchMenuFail
}

export type MenuActions = IFetchMenuInit | IFetchMenuSuccess | IFetchMenuFail