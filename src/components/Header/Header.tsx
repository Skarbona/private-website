import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "materialize-css";
import { HeaderInterface } from "./Header.interface";

export const Header: React.FC<HeaderInterface> = ({ menuItems }) => {
  const sideNav = useRef<HTMLUListElement>(null);
  const menuElements = useRef<HTMLLIElement[]>([]);

  useEffect(
    () => {
        menuElements.current = menuElements.current.slice(0, menuItems.length);
      // eslint-disable-next-line
    },
    [menuItems]
  );

  useEffect(
    () => {
      if (sideNav.current) {
        Sidenav.init(sideNav.current);
      }
    },
    [sideNav]
  );

  const mapMenuItems = () =>
    menuItems &&
    menuItems.map((item, i) => (
      <li
        key={`menuID-${item.id}`}
        className="animated fadeInDown slow"
        ref={el => ((menuElements.current as any)[i] = el)}
      >
        <Link to="/"> {item.name} </Link>
      </li>
    ));

  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav className="primary animated slideInDown">
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
