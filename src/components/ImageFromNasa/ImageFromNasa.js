import React from "react";
import "./ImageFromNasa.css";

export default function ImageFromNasa({ image }) {
  return (
    // <div className="image__container" onClick={onClick}>
    //   {props.children}
    // </div>
    <div className="image__container">
      <h2>Привет!</h2>
      <img className="image__image" src={image.img_src} alt="Ghbdtn/1" />
      <h3>Пока!</h3>
    </div>
  );
}
