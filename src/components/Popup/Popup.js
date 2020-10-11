import React from "react";
import "./Popup.css";

export default function Popup(isPopupOpen) {  
  return (
    <div className={`popup ${isPopupOpen === true && "popup_opened"}`}>
      <button>Закрыть</button>
    </div>
  );
}
