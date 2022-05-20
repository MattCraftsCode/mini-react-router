import React from "react";
import RouterContext from "./RouterContext";

// 返回一个带有 routeProps 的函数组件
function withRouter(Component) {
  return (props) => (
    <RouterContext.Consumer>
      {(value) => <Component {...value} {...props}></Component>}
    </RouterContext.Consumer>
  );
}

export default withRouter;
