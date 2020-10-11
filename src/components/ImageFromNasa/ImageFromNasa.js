import React from "react";
import "./ImageFromNasa.css";

export default function ImageFromNasa({ image, clickOnImage }) {
  return (
    <div className="image__container">
      <h2>Привет!</h2>
      <img
        className="image__image"
        src={image.img_src}
        alt="Ghbdtn/1"
        onClick={clickOnImage}
      />
      <h3>Пока!</h3>
    </div>
  );
}
