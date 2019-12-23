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
    case ElementsActionEnum.FetchPortfolioSuccess: {
      let mapCategories = [] as string[];
      action.payload.forEach(portfolioItem => {
        mapCategories = [...mapCategories, ...portfolioItem.categories];
      });

      return {
        ...state,
        portfolioItems: action.payload,
        portfolioCategories: [
          "All Items",
          ...Array.from(new Set(mapCategories))
        ], // Workaround for TS and new Set (TS support only iterables on Arrays)
        loading: false
      };
    }
    case ElementsActionEnum.FetchPortfolioFail:
      return {
        ...state,
        loading: false,
        error: true
      };

    case ElementsActionEnum.SelectCurrentCategory:
      return {
        ...state,
        selectedPortfolioCat: action.payload
      };
    default:
      return state;
  }
};

export default elementsReducer;
