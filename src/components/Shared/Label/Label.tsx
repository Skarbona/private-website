import React from "react";
import { LabelInterface } from "./Label.interface";

export const Label: React.FC<LabelInterface> = ({
  className = "section__home-element",
  primaryText,
  secondaryText,
  children
}) => {
  return (
    <div className={`section ${className} primary darken-1 center-align`}>
      <div className="container">
        <h2 className=" white-text center-align">{primaryText}</h2>
        {secondaryText && (
          <p className=" white-text flow-text center-align">{secondaryText}</p>
        )}
        {children && <div className="label__children">{children}</div>}
      </div>
    </div>
  );
};
