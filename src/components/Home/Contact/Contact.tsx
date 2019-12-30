import React, { useCallback, useRef, useState } from "react";

const preventDefaultForWindow = (e: Event) => e.preventDefault();

export const Contact: React.FC<{}> = () => {
  const wrapper = useRef<HTMLTableSectionElement>(null);
  const topLayer = useRef<HTMLDivElement>(null);
  const handle = useRef<HTMLDivElement>(null);
  const skew = 1000;
  const [positions, setPositions] = useState<{
    delta: number;
    x: number;
    y: number;
  }>({
    delta: 0,
    x: 0,
    y: 0
  });

  const onMouseMoveHandler = useCallback(
    e => {
      if (!e) return;
      const { delta, x } = positions;

      // Block scrolling windows object
      window.addEventListener("touchmove", preventDefaultForWindow);

      setPositions({
        ...positions,
        x: e.clientX ? e.clientX : e.touches[0] ? e.touches[0].clientX : 1,
        delta: (x - window.innerWidth / 2) * 0.5
      });

      handle.current!.style.left = x + delta + "px";
      topLayer.current!.style.width = x + skew + delta + "px";

      window.removeEventListener("touchmove", preventDefaultForWindow);
    },
    [positions]
  );

  return (
    <div className="section section__contact no-pad" id="contact">
      <section
        id="wrapper"
        className="skewed"
        onMouseMove={onMouseMoveHandler}
        onTouchMove={onMouseMoveHandler}
        onTouchStart={onMouseMoveHandler}
        onTouchEnd={onMouseMoveHandler}
        onTouchCancel={onMouseMoveHandler}
        ref={wrapper}
      >
        <div className="layer bottom grey darken-3">
          <div className="content-wrap">
            <div className="content-body">
              <h2 className="grey-text lighten-3-text">E-mail</h2>
              <p className="flow-text grey-text lighten-3-text">
                filip.sokolowski1990@gmail.com
              </p>
            </div>

            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/myPhoto/1.webp"}
              alt="MyFirstPhoto"
            />
          </div>
        </div>
        <div className="layer top grey lighten-3" ref={topLayer}>
          <div className="content-wrap">
            <div className="content-body">
              <h2 className="primary-text darken-1-text">Phone</h2>
              <p className="flow-text primary-text darken-1-text">
                +48 604 515 975
              </p>
            </div>

            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "images/myPhoto/2.webp"}
              alt="MySecondPhoto"
            />
          </div>
        </div>

        <div className="handle primary darken-1" ref={handle} />
      </section>
    </div>
  );
};
