import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "materialize-css";
import { HeaderInterface } from "./Header.interface";

export const Header: React.FC<HeaderInterface> = ({
  menuItems,
  homeRef,
  toolsAndTechRef,
  portfolioRef,
  galleryRef,
  contactRef
}) => {
  const sideNav: React.RefObject<HTMLUListElement> = useRef(null);

  const refArray = [
    homeRef,
    toolsAndTechRef,
    portfolioRef,
    galleryRef,
    contactRef
  ];

  useEffect(
    () => {
      if (sideNav.current) {
        Sidenav.init(sideNav.current);
      }
    },
    [sideNav]
  );

  const mapMenuItems = () =>
    menuItems.map((item, i) => (
      <li
        key={`menuID-${item.id}`}
        className="slow"
        onClick={() =>
          refArray[i].current!.scrollIntoView({
            block: "start",
            behavior: "smooth"
          })
        }
      >
        <Link to="/"> {item.name} </Link>
      </li>
    ));

  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav className="primary">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              FilipS.okołowski
            </Link>
            <Link
              to="#"
              data-target="mobile-burger"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">{mapMenuItems()}</ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-burger" ref={sideNav}>
        {mapMenuItems()}
      </ul>
    </React.Fragment>
  );
};
