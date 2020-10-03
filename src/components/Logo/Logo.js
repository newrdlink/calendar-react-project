import React from "react";
import "./Logo.css";
import logoImage from "../../images/1.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__image" src={logoImage} alt="Логотип" />
    </div>
  );
}

export default Logo;
