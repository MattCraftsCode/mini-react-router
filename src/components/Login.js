import React from "react";

function Login(props) {
  const login = () => {
    localStorage.setItem("isLogin", true);
    props.history.push("/user/add");
  };
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  );
}

export default Login;
