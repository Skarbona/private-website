import { selectCurrentCategory } from "../../../../store/elements/action";

export interface PortfolioCategoriesInterface {
  portfolioCategories: string[];
  selectedPortfolioCat: string;
  selectCurrentCategory: typeof selectCurrentCategory;
}
