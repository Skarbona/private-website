import React from "react";

import { HeroInterface } from "./Hero.interface";

export const Hero: React.FC<HeroInterface> = ({
  name,
  className = "section__hero",
  imageLink,
  h1Text,
  h2Text,
  homeRef
}) => {
  console.log(homeRef);
  return (
    <div
      id={name}
      className={`section ${className}`}
      style={{
        backgroundImage: `url(${imageLink})`
      }}
      ref={homeRef}
    >
      <div className="container">
        <h1>{h1Text}</h1>
        <h2>{h2Text}</h2>
      </div>
    </div>
  );
};
