import React from "react";

const size = 25;

export const Socials: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <a
        href="https://www.instagram.com/filip.sokolowski1990/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={size}
          width={size}
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
          alt="instagram"
        />
      </a>
      <a
        href="https://www.facebook.com/Sokolowski.Filip"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={size}
          width={size}
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
          alt="facebook"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/filip-soko%C5%82owski-084666152/?locale=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={size}
          width={size}
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
          alt="linkedin"
        />
      </a>
    </React.Fragment>
  );
};
