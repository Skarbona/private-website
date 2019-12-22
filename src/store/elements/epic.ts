import axios from "axios";

import { AppThunk } from "../store.interface";
import * as elementsActions from "./action";

export const portfolioEpic = (): AppThunk => async dispatch => {
  dispatch(elementsActions.fetchPortfolioInit());
  try {
    // TODO: Add real endpoint
    const response = await axios.get("/databaseMock/portfolio.json");
    dispatch(elementsActions.fetchPortfolioSuccess(response.data));
  } catch (e) {
    console.warn("Cannot Fetch Portfolio", e);
    dispatch(elementsActions.fetchPortfolioFail());
  }
};
