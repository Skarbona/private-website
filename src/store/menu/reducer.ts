import { menuInitialState } from "./initialState";
import { MenuInitialState } from "./initialState.interface";
import { MenuActions } from "./action.interface";
import { MenuActionEnum } from "./enum";

const menuReducer = (
  state = menuInitialState,
  action: MenuActions
): MenuInitialState => {
  switch (action.type) {
    case MenuActionEnum.FetchMenuInit:
      return {
        ...state,
        loading: true,
        error: false
      };
    case MenuActionEnum.FetchMenuSuccess:
      return {
        ...state,
        menuItems: action.payload,
        loading: false
      };
    case MenuActionEnum.FetchMenuFail:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default menuReducer;
