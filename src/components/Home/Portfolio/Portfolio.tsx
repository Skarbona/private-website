import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../../store/store.interface";
import {
  PortfolioStoreInterface,
  PortfolioInterface
} from "./Portfolio.interface";
import { selectCurrentCategory } from "../../../store/elements/action";
import { PortfolioItemsWrapper } from "./PortfolioItems/PortfolioItems";
import { PortfolioCategories } from "./PortfolioCategories/PortfolioCategories";

export const PortfolioWrapper: React.FC<PortfolioInterface> = ({
  portfolioItems,
  portfolioCategories,
  selectedPortfolioCat,
  selectCurrentCategory,
}) => {
  return (
    <div
      className="section section__portfolio"
      style={{
        backgroundImage: "url(images/backgrounds/tlo-10.webp)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="row flex">
              <PortfolioCategories
                portfolioCategories={portfolioCategories}
                selectedPortfolioCat={selectedPortfolioCat}
                selectCurrentCategory={selectCurrentCategory}
              />
              <PortfolioItemsWrapper
                portfolioItems={portfolioItems}
                selectedPortfolioCat={selectedPortfolioCat}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  elements: { portfolioItems, portfolioCategories, selectedPortfolioCat }
}: RootState) =>
  ({
    portfolioItems,
    portfolioCategories,
    selectedPortfolioCat
  } as PortfolioStoreInterface);

const mapDispatchToProps = {
  selectCurrentCategory
};

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const Portfolio = connector(PortfolioWrapper);
