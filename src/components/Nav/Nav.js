import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  let menu = [
    {
      title: "О доске",
      link: "/",
    },
    {
      title: "Интересное",
      link: "/interesting",
    },
    {
      title: "Пользователи",
      link: "/users",
    },
    {
      title: "Добавить событие",
      link: "/add-event",
    },
    {
      title: "Наше время",
      link: "/our-time",
    },
  ];

  return (
    <ul className="nav">
      {menu.map((item) => (
        <li className="nav__item">
          <Link to={`${item.title}`}></Link>
        </li>
      ))}
    </ul>
  );
}
