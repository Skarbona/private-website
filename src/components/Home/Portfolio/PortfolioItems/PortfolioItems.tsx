import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { PortfolioItemsInterface } from "./PortfolioItems.interface";

export const PortfolioItemsWrapper: React.FC<PortfolioItemsInterface> = ({
  portfolioItems,
  selectedPortfolioCat
}) => {
  const filteredPortfolioItems = portfolioItems.filter(
    item =>
      selectedPortfolioCat === "All Items" ||
      item.categories.includes(selectedPortfolioCat)
  );

  return (
    <TransitionGroup className="row full-width">
      {filteredPortfolioItems.map(item => (
        <CSSTransition key={item.id} timeout={500} classNames="move">
          <div className="col s12 m6 l6 xl4 portfolio-item">
            <div
              className="card sticky-action"
              style={{ backgroundImage: "url(images/backgrounds/tlo-11.webp)" }}
            >
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <div className="row">{item.name}</div>
                  <div className="row flex flex-center tags__container">
                    {item.tags.map(tag => (
                      <span className="badge primary" key={tag}>
                        {tag}
                      </span>
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
                        className={`btn primary darken-1
                      ${!item.links.live_link && "disabled"}`}
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
