import React from "react";

import { Gallery } from "./Gallery";
import { galleries } from "./GalleriesResolver";

export const Galleries: React.FC<{}> = () => {
  return (
    <div
      className="section section__gallery"
      style={{ backgroundImage: "url(images/backgrounds/tlo-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            {(Object.keys(galleries) as Array<keyof typeof galleries>).map(
              gallery => (
                <Gallery
                  name={gallery}
                  images={galleries[gallery]}
                  key={gallery}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
