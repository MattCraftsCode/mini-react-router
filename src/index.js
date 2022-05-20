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

ReactDOM.render(
  <div>
    <Router>
      <ul>
        <li>
          <Link to="/" style={{ color: "red", fontWeight: "bold" }}>
            首页
          </Link>
        </li>
        <li>
          <Link to="/user">用户</Link>
        </li>
        <li>
          <Link to="/profile">详情</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
