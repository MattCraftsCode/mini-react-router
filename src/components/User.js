import React, { useRef } from "react";
import Link from "../react-router-dom/Link";
import Route from "../react-router/Route";
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

function UserAdd(props) {
  const userRef = useRef();

  const submit = () => {
    UserAPI.add({
      id: Date.now(),
      name: userRef.current.value,
    });

    props.history.push("/user/list");
  };

  return (
    <div>
      <input type="text" ref={userRef} />
      <button onClick={submit}>添加</button>
    </div>
  );
}

function UserDetail(props) {
  // 获取 state 数据
  // console.log(props.location.state);
  // console.log(props.match.params);
  // const user = props.location?.state || {};

  const id = props.match?.params?.id ? parseInt(props.match?.params?.id) : 0;

  const user = UserAPI.find(id);

  return <div>用户详情: {user.name}</div>;
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
        </ul>
        <div>
          <Route path="/user/list" component={UserList} exact></Route>
          <Route path="/user/add" component={UserAdd}></Route>
          <Route path="/user/detail/:id" component={UserDetail}></Route>
        </div>
      </div>
    );
  }
}

export default User;
