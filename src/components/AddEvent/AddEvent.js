import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api/Api";

export default function AddEvent() {
  const [fotoBackendNasa, setFotoBackendNasa] = useState([]);

  useEffect(() => {
    api.getNasaData().then((res) => {
      const { latest_photos } = res;
      setFotoBackendNasa(latest_photos);
    });
  }, []);
  console.log(fotoBackendNasa);
  return (
    <div>
      {fotoBackendNasa.map((item) => (
        <p key={item.id}>
          {item.id}
          <img src={item.img_src} />
        </p>
      ))}
    </div>
  );
}
