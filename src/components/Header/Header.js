import React from "react";
import Logo from "../Logo/Logo";
import CurrenYear from "../CurrentYear/CurrentYear";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <Header className="header">
      <Logo />
      <CurrenYear />
    </Header>
  );
}

export default Header;
