import React from "react";
import {LabelInterface} from "./Label.interface";

export const Label: React.FC<LabelInterface> = ({
  className = "section__home-element",
  primaryText,
  secondaryText
}) => {
  return (
    <div className={`section ${className} primary darken-1 center-align`}>
      <div className="container">
        <h2 className=" white-text center-align animated fadeIn">
          {primaryText}
        </h2>
        <p className=" white-text flow-text center-align animated fadeIn ">
          {secondaryText}
        </p>
      </div>
    </div>
  );
};
