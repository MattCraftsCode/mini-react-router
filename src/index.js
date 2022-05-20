import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "./react-router-dom";

// 组件
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Switch from "./react-router/Switch";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/profile" component={Profile}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
