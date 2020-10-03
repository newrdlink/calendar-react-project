import React from "react";
import "./CurrentYear.css"

export default function CurrenYear() {
  return <h3 className="currentYear">{new Date().getFullYear()}</h3>;
}
