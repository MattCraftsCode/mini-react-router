import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "./react-router-dom";

// 组件
import Switch from "./react-router/Switch";
import Link from "./react-router-dom/Link";

// 页面
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NavLink from "./react-router-dom/NavLink";
import NavLinkRoute from "./react-router-dom/NavLinkRoute";

ReactDOM.render(
  <div>
    <Router>
      <h2>NavLink</h2>
      <ul>
        <li>
          <NavLink to="/home">首页</NavLink>
        </li>
        <li>
          <NavLink to="/user">用户</NavLink>
        </li>
        <li>
          <Link to="/profile">详情</Link>
        </li>
      </ul>
      <h2>NavLinkRoute</h2>
      <ul>
        <li>
          <NavLinkRoute to="/home">首页</NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute to="/user">用户</NavLinkRoute>
        </li>
        <li>
          <Link to="/profile">详情</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
