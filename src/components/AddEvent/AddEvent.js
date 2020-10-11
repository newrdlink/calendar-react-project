import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api/Api";
import ImageFromNasa from "../ImageFromNasa/ImageFromNasa";
import Popup from "../Popup/Popup";
import "./AddEvent.css";

export default function AddEvent() {
  const [fotoBackendNasa, setFotoBackendNasa] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => setIsPopupOpen(false);
  const clickOnImage = (item) => {
    setSelectedImage(item);
  };

  useEffect(() => {
    api.getNasaLastPhoto().then((res) => {
      const { latest_photos } = res;
      const tenLatestPhoto = latest_photos.slice(0, 12);
      setFotoBackendNasa(tenLatestPhoto);
    });
  }, []);

  return (
    <div className="images">
      <Popup isPopupOpen={isPopupOpen} />
      {fotoBackendNasa.map((item) => (
        <ImageFromNasa
          key={item.id}
          image={item}
          clickOnImage={() => clickOnImage(item)}
        ></ImageFromNasa>
      ))}
    </div>
  );
}
