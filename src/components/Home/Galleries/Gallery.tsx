import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { GalleryInterface } from "./Gallery.interface";
import { Modal } from "../../Shared/Modal/Modal";

export const Gallery: React.FC<GalleryInterface> = ({ name, images }) => {
  const [isModalOpen, setModalStatus] = useState<boolean>(false);
  const featureImage = Object.values(images)[2];

  const modalHandler = useCallback(
    () => {
      setModalStatus(!isModalOpen);
    },
    [isModalOpen]
  );

  return (
    <React.Fragment>
      <div className="col s12 m6 l6 xl4 animated fadeIn">
        <div className="card">
          <div
            className="card-image"
            onClick={modalHandler}
            style={{
              cursor: "pointer",
              backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${featureImage})`
            }}
          >
            <span className="card-title"> {name}</span>
            <Link
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light primary darken-1"
              onClick={modalHandler}
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={modalHandler}>
          <div>HELLO WORLD!</div>
        </Modal>
      )}
    </React.Fragment>
  );
};
