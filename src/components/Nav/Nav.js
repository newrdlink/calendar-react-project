import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { menuList } from "../utils/InitialData";

export default function Nav(place) {
  return (
    <ul className={`nav ${"nav_pos_footer"}`}>
      {menuList.map((item) => (
        <li key={item.id} className="nav__item">
          <NavLink
            exact={item.id === 1 && true}
            activeClassName="nav__link_active"
            className="nav__link"
            to={`${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
