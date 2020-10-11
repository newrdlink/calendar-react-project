import React from "react";
import "./Main.css";
import Users from "../Users/Users";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Developments from "../Developments/Developments";
import AddEvent from "../AddEvent/AddEvent";

function Main() {
  const clickImageNasa = () => {
    console.log('fge');
  };
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/interesting">
          <Developments />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/add-event">
          <AddEvent onClick={clickImageNasa} />
        </Route>
        <Route path="/our-time">
          <Users />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
