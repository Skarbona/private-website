export interface PortfolioItem {
  id: string;
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
  loading: boolean;
  error: boolean;
}
