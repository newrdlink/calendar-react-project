import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import Popup from "../Popup/Popup";
//import Developments from "../Developments/Developments";
//import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
