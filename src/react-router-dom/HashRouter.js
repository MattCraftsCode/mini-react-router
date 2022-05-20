import { createHashHistory } from "../history";
import React from "react";

import { Router } from "../react-router";

// 源码用类组件实现
class HashRouter extends React.Component {
  constructor(props) {
    super(props);

    // 暂时用官方的 createHashHistory
    this.history = createHashHistory(props);
  }

  // 此处写，和构造方法 this.xx 一样
  // history = createHashHistory();

  render() {
    return <Router history={this.history}>{this.props.children}</Router>;
  }
}

export default HashRouter;
