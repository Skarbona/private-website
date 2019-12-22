import { elementsInitialState } from "./initialState";
import { ElementsInitialState } from "./initialState.interface";
import { ElementsActions } from "./action.interface";
import { ElementsActionEnum } from "./enum";

const elementsReducer = (
  state = elementsInitialState,
  action: ElementsActions
): ElementsInitialState => {
  switch (action.type) {
    case ElementsActionEnum.FetchPortfolioInit:
      return {
        ...state,
        loading: true,
        error: false
      };
    case ElementsActionEnum.FetchPortfolioSuccess:
      return {
        ...state,
        portfolioItems: action.payload,
        loading: false
      };
    case ElementsActionEnum.FetchPortfolioFail:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default elementsReducer;
