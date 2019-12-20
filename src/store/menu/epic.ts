import axios from "axios";

import { AppThunk } from "../store.interface";
import * as menuActions from "./action";

export const menuEpic = (): AppThunk => async dispatch => {
  dispatch(menuActions.fetchMenuInit());
  try {
    // TODO: Add real endpoint
    const response = await axios.get("/databaseMock/menu.json");
    dispatch(menuActions.fetchMenuSuccess(response.data));
  } catch (e) {
    console.warn("Cannot Fetch Products", e);
    dispatch(menuActions.fetchMenuFail());
  }
};
