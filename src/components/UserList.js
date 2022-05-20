import React from "react";
import Link from "../react-router-dom/Link";
import { UserAPI } from "../utils";

function UserList() {
  const users = UserAPI.list();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/detail/${user.id}`}>
              {user.id} - {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
