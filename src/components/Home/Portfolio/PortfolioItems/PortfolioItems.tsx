import React from "react";
import { PortfolioItemsInterface } from "./PortfolioItems.interface";

export const PortfolioItemsWrapper: React.FC<PortfolioItemsInterface> = ({
  portfolioItems,
  selectedPortfolioCat
}) => (
  <div className="row">
    {portfolioItems
      .filter(
        item =>
          selectedPortfolioCat === "All Items" ||
          item.categories.includes(selectedPortfolioCat)
      )
      .map(item => (
        <div className="col s12 m6 l6 xl4 animated fadeIn portfolio-item" key={item.id}>
          <div className="card sticky-action">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                <div className="row">{item.name}</div>
                <div className="row flex flex-center tags__container">
                    {item.tags.map(tag => (
                      <span className="badge primary" key={tag}>{tag}</span>
                    ))}
                </div>
              </span>
            </div>
            <hr />
            <div className="card-actions">
              <div className="row center-align">
                <div className="col s12 m6">
                  {
                    <a
                      className={`btn grey darken-3 ${!item.links
                        .git_repo_link && "disabled"}`}
                      href={item.links.git_repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="material-icons left"> scatter_plot </i>
                      GitHub
                    </a>
                  }
                </div>
                <div className="col s12 m6">
                  {
                    <a
                      className={`btn primary darken-1 ${!item.links
                        .live_link && "disabled"}`}
                      href={item.links.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="material-icons left"> launch </i>
                      Live
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);
