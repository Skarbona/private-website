import React from "react";
import { PortfolioCategoriesInterface } from "./PortfolioCategories.interface";

export const PortfolioCategories: React.FC<PortfolioCategoriesInterface> = ({
  portfolioCategories,
  selectedPortfolioCat,
  selectCurrentCategory
}) => {
  return (
    <div className="row">
      {portfolioCategories.map(category => (
        <button
          key={category}
          className="btn waves-effect primary"
          disabled={selectedPortfolioCat === category}
          onClick={() => selectCurrentCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
