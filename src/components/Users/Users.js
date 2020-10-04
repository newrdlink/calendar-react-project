import React from "react";
import api from "../utils/Api/Api";
import { useEffect, useState } from "react";
import User from "../User/User";

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
      {users.map((user, id) => (
        <User key={id} user={user} />
      ))}
    </div>
  );
}
