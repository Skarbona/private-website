import React from "react";

import { Hero } from "../Shared/Hero/Hero";
import { Label } from "../Shared/Label/Label";

export const Home: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <div>
        <Hero
          name="home-hero"
          h1Text="FRONT"
          h2Text="DEV"
          imageLink="/images/backgrounds/tlo-10.png"
        />
        <Label
          primaryText="Tools &amp; Tech"
          secondaryText="I've been a programmer since 2012. I specialize in JS, ReactJS, REST API and Node.JS"
        />
      </div>
    </React.Fragment>
  );
};
