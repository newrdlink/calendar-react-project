import React from "react";
import api from "../utils/Api/Api";
import { useEffect, useState } from "react";
import Month from "../Month/Month";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAppStartInfo().then((res) => {
      const [usersBackend] = res;
      setUsers(usersBackend);
    });
  }, []);

  return (
    <div className="main__container">
      {users.map((user, i) => (
        <Month key={i} user={user} />
      ))}
      <h2 className="main__title">Main container</h2>
    </div>
  );
}
