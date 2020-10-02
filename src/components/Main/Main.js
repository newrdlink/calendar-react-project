import React from "react";
import "./Main.css";
import Users from "../Users/Users";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/interesting">
          <Users />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/add-event">
          <Users />
        </Route>
        <Route path="/our-time">
          <Users />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
