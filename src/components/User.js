import React from "react";
import Link from "../react-router-dom/Link";
import Route from "../react-router/Route";
import Protected from "../react-router/Protected";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import UserCreate from "./UserCreate";

class User extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/user/list">用户列表</Link>
          </li>
          <li>
            <Link to="/user/add">用户添加</Link>
          </li>
          <li>
            <Link to="/user/create">用户创建</Link>
          </li>
        </ul>
        <div>
          <Protected
            path="/user/list"
            component={UserList}
            fall="/login"
            auth={() => {
              const isLogin = localStorage.getItem("isLogin");
              return !!isLogin;
            }}
            exact
          ></Protected>
          <Protected
            path="/user/add"
            component={UserAdd}
            fall="/login"
            auth={() => {
              const isLogin = localStorage.getItem("isLogin");
              return !!isLogin;
            }}
          ></Protected>
          <Route path="/user/detail/:id" component={UserDetail}></Route>
          <Route path="/user/create" component={UserCreate}></Route>
        </div>
      </div>
    );
  }
}

export default User;
