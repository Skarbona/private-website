import React from "react";

export interface HeroInterface {
  name: string;
  className?: string;
  imageLink: string;
  h1Text: string;
  h2Text: string;
  homeRef: React.RefObject<HTMLDivElement>;
}
