import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import * as menuEpics from "../store/menu/epic";
import * as elementsEpics from "../store/elements/epic";
import {
  AppDispatchInterface,
  AppInterface,
  AppStoreStateInterface
} from "./App.interface";

import { Header } from "./Header/Header";
import { RootState } from "../store/store.interface";
import { Home } from "./Home/Home";

const AppWrapper: React.FC<AppInterface> = ({
  menuEpic,
  menuItems,
  portfolioEpic
}: AppInterface) => {
  useEffect(() => {
    menuEpic();
    portfolioEpic();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <div className="filip-website">
        <Header menuItems={menuItems} />
        <Home />
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps: AppDispatchInterface = {
  menuEpic: menuEpics.menuEpic,
  portfolioEpic: elementsEpics.portfolioEpic
};

const mapStateToProps = ({ menu }: RootState) =>
  ({
    menuItems: menu.menuItems
  } as AppStoreStateInterface);

export const connector = connect(mapStateToProps, mapDispatchToProps);

export const App = connector(AppWrapper);
