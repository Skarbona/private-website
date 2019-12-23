import React from "react";

import { importAllFiles } from "../../../utils/importUtils";
import { Gallery } from "./Gallery";
import { GalleriesInterface } from "./Gallery.interface";

// Cannot Map require.context with variables/properties
const galleryCroatia = importAllFiles(
  require.context(
    "../../../../public/images/galleries/Croatia",
    false,
    /.*\.jpg$/
  )
);

const galleryItaly = importAllFiles(
  require.context(
    "../../../../public/images/galleries/Italy",
    false,
    /.*\.jpg$/
  )
);

const galleryPrague = importAllFiles(
  require.context(
    "../../../../public/images/galleries/Prague",
    false,
    /.*\.jpg$/
  )
);

const galleryUSA = importAllFiles(
  require.context("../../../../public/images/galleries/USA", false, /.*\.jpg$/)
);

const galleryUkraine = importAllFiles(
  require.context(
    "../../../../public/images/galleries/Ukraine",
    false,
    /.*\.jpg$/
  )
);

const galleries = {
  Prague: galleryPrague,
  Croatia: galleryCroatia,
  USA: galleryUSA,
  Italy: galleryItaly,
  Ukraine: galleryUkraine
} as GalleriesInterface;

console.log(galleries);

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
