import React from "react";
import Link from "../react-router-dom/Link";

class User extends React.Component {
  render() {
    return (
      <div>
        用户列表:
        <ul>
          <li>
            <Link to="/user/1" style={{ color: "red" }}>
              to 是字符串
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/user/2", state: { id: 2, name: "张三" } }}>
              to 是对象
            </Link>
          </li>
          <li>用户3</li>
        </ul>
      </div>
    );
  }
}

export default User;
