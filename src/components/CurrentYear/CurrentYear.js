import React from "react";

export default function CurrenYear() {
  const currentDate = new Date();

  return <h3>{currentDate.getFullYear()}</h3>;
}
