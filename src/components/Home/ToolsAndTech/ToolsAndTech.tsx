import React, { memo } from "react";

import { importAllFiles } from "../../../utils/importUtils";

export const ToolsAndTech = memo(() => {
  const images = importAllFiles(
    require.context("../../../../public/images/tools", false, /.*\.png$/)
  );
  console.log(images);
  return (
    <div>
      {Object.keys(images).map(image => (
        <img src={images[image]} alt={image} key={image} />
      ))}
    </div>
  );
});
