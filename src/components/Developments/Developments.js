import React from "react";
import "./Developments.css";
import { initialMonth } from "../utils/InitialData";
import Month from "../Month/Month";

export default function Developments() {
  return (
    <div className="developments">
      <ul className="developments__items">
        {initialMonth.map((month) => (
          <li key={month.id}>
            <Month month={month} />
          </li>
        ))}
      </ul>
    </div>
  );
}
