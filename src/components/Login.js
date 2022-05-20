import React from "react";

function Login(props) {
  const login = () => {
    localStorage.setItem("isLogin", true);

    const from = props.location.state?.from || "/";
    props.history.push(from);
  };
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  );
}

export default Login;
