import React from "react";
import Logo from "../Logo/Logo";
import CurrenYear from "../CurrentYear/CurrentYear";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <CurrenYear />
    </header>
  );
}

export default Header;
