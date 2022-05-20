import React from "react";
import { matchPath } from "react-router-dom";
import RouterContext from "./RouterContext";

class Switch extends React.Component {
  static contextType = RouterContext;

  render() {
    const { location } = this.context;
    let element, match;

    React.Children.forEach(this.props.children, (route) => {
      if (!match && React.isValidElement(route)) {
        element = route;
        match = matchPath(location.pathname, route.props);
      }
    });

    return match ? React.cloneElement(element, { computedMatch: match }) : null;
  }
}

export default Switch;
