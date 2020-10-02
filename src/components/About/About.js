import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h3>Привет! Это мы!</h3>
      <p>
        Попробуем решить задачу другим способом — применим компонент Switch.
        Если разместить несколько компонентов Route внутри Switch, отрисуется
        только один из них. Импортируем этот компонент и обернём в него
        маршруты:
      </p>
    </div>
  );
}
