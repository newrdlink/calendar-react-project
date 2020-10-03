import React from "react";

function User(user) {
  return (
    <div className="Month">
      <h3 className="month__title">{user.user.name}</h3>      
    </div>
  );
}

export default User;
