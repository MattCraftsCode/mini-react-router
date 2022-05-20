import React, { useRef } from "react";
import { UserAPI } from "../utils";

function UserAdd(props) {
  const userRef = useRef();

  const submit = () => {
    UserAPI.add({
      id: Date.now(),
      name: userRef.current.value,
    });

    props.history.push("/user/list");
  };

  const logout = () => {
    localStorage.setItem("isLogin", "");
    props.history.push({ pathname: "/login", state: { from: "/user/add" } });
  };

  return (
    <div>
      <input type="text" ref={userRef} />
      <button onClick={submit}>添加</button>
      <button onClick={logout}>退出</button>
    </div>
  );
}

export default UserAdd;
