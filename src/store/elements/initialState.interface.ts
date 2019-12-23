export interface PortfolioItem {
  id: string;
  name: string;
  categories: string[];
  tags: string[];
  links: {
    live_link: string;
    git_repo_link: string;
  };
}

export interface ElementsInitialState {
  portfolioItems: PortfolioItem[];
  portfolioCategories: string[];
  selectedPortfolioCat: string;
  loading: boolean;
  error: boolean;
}
