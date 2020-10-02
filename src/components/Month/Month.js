import React from "react";

function Month(user) {
  return (
    <div className="Month">
      <h3 className="month__title">{user.user.name}</h3>
      
    </div>
  );
}

export default Month;
