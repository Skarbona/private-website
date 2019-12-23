import { ConnectedProps } from "react-redux";

import { PortfolioItem } from "../../../store/elements/initialState.interface";
import { connector } from "./Portfolio";

export interface PortfolioStoreInterface {
  portfolioItems: PortfolioItem[];
  portfolioCategories: string[];
  selectedPortfolioCat: string;
}

export type PortfolioInterface = ConnectedProps<typeof connector>;
