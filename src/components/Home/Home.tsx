import React from "react";

import { Hero } from "../Shared/Hero/Hero";
import { Label } from "../Shared/Label/Label";
import { ToolsAndTech } from "./ToolsAndTech/ToolsAndTech";
import { Portfolio } from "./Portfolio/Portfolio";
import { Galleries } from "./Galleries/Galleries";
import { Contact } from "./Contact/Contact";
import { Socials } from "./Socials/Socials";
import { HomeInterface } from "./Home.interface";

export const Home: React.FC<HomeInterface> = ({
  homeRef,
  toolsAndTechRef,
  portfolioRef,
  galleryRef,
  contactRef
}: HomeInterface) => {
  return (
    <React.Fragment>
      <div>
        <Hero
          homeRef={homeRef}
          name="home-hero"
          h1Text="FRONT"
          h2Text="DEV"
          imageLink="images/backgrounds/tlo-10.webp"
        />
        <div ref={toolsAndTechRef}>
          <Label
            primaryText="Tools &amp; Tech"
            secondaryText="I've been a programmer since 2012. I specialize in JS, ReactJS, REST API and Node.JS"
          />
          <ToolsAndTech />
        </div>
        <div ref={portfolioRef}>
          <Label primaryText="Portfolio" secondaryText="See my portfolio!" />
          <Portfolio />
        </div>
        <div ref={galleryRef}>
          <Label primaryText="Galleries" secondaryText="See My Travels!" />
          <Galleries />
        </div>
        <div ref={contactRef}>
          <Label primaryText="Contact" secondaryText="Let’s talk!" />
          <Contact />
        </div>
        <Label
          primaryText="Find more!"
          className="section__home-element section__socials"
        >
         <Socials />
        </Label>
      </div>
    </React.Fragment>
  );
};
