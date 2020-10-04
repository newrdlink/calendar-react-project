import React from "react";
import Logo from "../Logo/Logo";
import CurrenYear from "../CurrentYear/CurrentYear";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <CurrenYear />
      <Nav place={"nav_pos_header"} />
    </header>
  );
}

export default Header;
