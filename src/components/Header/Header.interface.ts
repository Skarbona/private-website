import { MenuItem } from "../../store/menu/initialState.interface";
import React from "react";

export interface HeaderInterface {
  menuItems: MenuItem[];
  homeRef: React.RefObject<HTMLDivElement>;
  toolsAndTechRef: React.RefObject<HTMLDivElement>;
  portfolioRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}
