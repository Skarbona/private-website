import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../store/store.interface";
import {
  PortfolioStoreInterface,
  PortfolioInterface
} from "./Portfolio.interface";

export const PortfolioWrapper: React.FC<PortfolioInterface> = ({
  portfolioItems,
  portfolioCategories
}) => {
  return <div />;
};

const mapStateToProps = ({ elements: { portfolioItems, portfolioCategories } }: RootState) =>
  ({
    portfolioItems,
    portfolioCategories,
  } as PortfolioStoreInterface);

export const connector = connect(
  mapStateToProps,
  null
);

export const Portfolio = connector(PortfolioWrapper);
