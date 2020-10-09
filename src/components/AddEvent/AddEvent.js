import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api/Api";
import ImageFromNasa from "../ImageFromNasa/ImageFromNasa";
import "./AddEvent.css";

export default function AddEvent() {
  const [fotoBackendNasa, setFotoBackendNasa] = useState([]);

  useEffect(() => {
    api.getNasaLastPhoto().then((res) => {
      const { latest_photos } = res;
      const tenLatestPhoto = latest_photos.slice(0, 20);
      setFotoBackendNasa(tenLatestPhoto);
    });
  }, []);
  console.log(fotoBackendNasa);
  return (
    <div className="images">
      {fotoBackendNasa.map((item) => (
        <ImageFromNasa key={item.id}>
          <img
            className="image__image"
            alt={item.camera.full_name}
            src={item.img_src}
          />
        </ImageFromNasa>
      ))}
    </div>
  );
}
