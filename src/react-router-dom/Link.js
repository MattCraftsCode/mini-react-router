// 如何判断 Route 应该放到哪个分类, react-router or react-router-dom?
// 看是否用到了浏览器相关的 API

import React from "react";
import RouterContext from "../react-router/RouterContext";

function Link(props) {
  return (
    <RouterContext.Consumer>
      {({ history }) => {
        return (
          <a
            {...props}
            onClick={(event) => {
              event.preventDefault();
              history.push(props.to);
            }}
          >
            {props.children}
          </a>
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Link;
