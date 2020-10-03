import React from "react";
import "./Month.css";

export default function Month({ month }) {
  //console.log(month);
  return <img className="month" src={`${month.image}`} alt={`${month.name}`} />;
}
