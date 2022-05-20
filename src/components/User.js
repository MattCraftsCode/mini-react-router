import React from "react";
import Link from "../react-router-dom/Link";
import Route from "../react-router/Route";

function UserList() {
  return (
    <div>
      <ul>
        <li>小明</li>
        <li>小王</li>
        <li>小李</li>
      </ul>
    </div>
  );
}

function UserAdd() {
  return <div>UserAdd</div>;
}

function UserDetail(props) {
  // 获取 state 数据
  console.log(props.location.state);
  const user = props.location?.state || {};
  return (
    <div>
      <ul>
        <li>
          <Link to={{ pathname: "/user/detail/1", state: { id: 1 } }}>
            小明 id = 1
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/user/detail/2", state: { id: 2 } }}>
            小王 id = 2
          </Link>
        </li>
        <div>{user.id}</div>
      </ul>
    </div>
  );
}

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
            <Link to="/user/detail">用户详情</Link>
          </li>
        </ul>
        <div>
          <Route path="/user/list" component={UserList} exact></Route>
          <Route path="/user/add" component={UserAdd}></Route>
          <Route path="/user/detail" component={UserDetail}></Route>
        </div>
      </div>
    );
  }
}

export default User;
