import { ElementsActionEnum } from "./enum";
import { PortfolioItem } from "./initialState.interface";

interface ActionInterface {
  type: ElementsActionEnum;
}

export interface IFetchPortfolioInit extends ActionInterface {
  type: ElementsActionEnum.FetchPortfolioInit;
}

export interface IFetchPortfolioSuccess extends ActionInterface {
  type: ElementsActionEnum.FetchPortfolioSuccess;
  payload: PortfolioItem[];
}

export interface IFetchPortfolioFail extends ActionInterface {
  type: ElementsActionEnum.FetchPortfolioFail;
}

export interface ISelectCurrentCategory extends ActionInterface {
  type: ElementsActionEnum.SelectCurrentCategory;
  payload: string;
}

export type ElementsActions =
  | IFetchPortfolioInit
  | IFetchPortfolioSuccess
  | IFetchPortfolioFail
  | ISelectCurrentCategory;
