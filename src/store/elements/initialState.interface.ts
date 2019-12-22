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
  loading: boolean;
  error: boolean;
}
