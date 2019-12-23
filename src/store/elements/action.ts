import { ActionCreator } from "redux";

import { ElementsActionEnum } from "./enum";
import * as I from "./action.interface";
import { PortfolioItem } from "./initialState.interface";

export const fetchPortfolioInit: ActionCreator<I.IFetchPortfolioInit> = () => ({
  type: ElementsActionEnum.FetchPortfolioInit
});

export const fetchPortfolioSuccess: ActionCreator<I.IFetchPortfolioSuccess> = (
  portfolio: PortfolioItem[]
) => ({
  type: ElementsActionEnum.FetchPortfolioSuccess,
  payload: portfolio
});

export const fetchPortfolioFail: ActionCreator<I.IFetchPortfolioFail> = () => ({
  type: ElementsActionEnum.FetchPortfolioFail
});

export const selectCurrentCategory: ActionCreator<I.ISelectCurrentCategory> = (category: string) => ({
    type: ElementsActionEnum.SelectCurrentCategory,
    payload: category
});
