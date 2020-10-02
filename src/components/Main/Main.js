import React from "react";
import "./Main.css";
import Month from "../Month/Month";
import { useEffect, useState } from "react";
import api from "../utils/Api/Api";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAppStartInfo().then((res) => {
      const [usersBackend] = res;
      setUsers(usersBackend);
    });
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        {users.map((user, i) => (
          <Month key={i} user={user} />
        ))}
        <h2 className="main__title">Main container</h2>
      </div>
    </main>
  );
}

export default Main;
