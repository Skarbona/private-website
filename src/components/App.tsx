import React, { useEffect, useRef } from "react";
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
  const homeRef: React.RefObject<HTMLDivElement> = useRef(null);
  const toolsAndTechRef: React.RefObject<HTMLDivElement> = useRef(null);
  const portfolioRef: React.RefObject<HTMLDivElement> = useRef(null);
  const galleryRef: React.RefObject<HTMLDivElement> = useRef(null);
  const contactRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    menuEpic();
    portfolioEpic();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <div className="filip-website">
        <Header
          menuItems={menuItems}
          homeRef={homeRef}
          toolsAndTechRef={toolsAndTechRef}
          portfolioRef={portfolioRef}
          galleryRef={galleryRef}
          contactRef={contactRef}
        />
        <Home
          homeRef={homeRef}
          toolsAndTechRef={toolsAndTechRef}
          portfolioRef={portfolioRef}
          galleryRef={galleryRef}
          contactRef={contactRef}
        />
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

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const App = connector(AppWrapper);
