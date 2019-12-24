import React, { memo } from "react";

import { importAllFiles } from "../../../utils/importUtils";

const images = importAllFiles(
  require.context("../../../../public/images/tools", false, /.*\.png$/)
);

export const ToolsAndTech: React.FC<{}> = memo(() => {
  return (
    <div
      className="section section__tools-and-tech"
      style={{ backgroundImage: "url(images/backgrounds/tlo-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            {Object.keys(images).map(image => (
              <div className="col l4 m6 s6 center-align" key={image}>
                <img src={images[image]} alt={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
