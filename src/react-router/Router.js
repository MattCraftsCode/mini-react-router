import React from "react";
import RouterContext from "./RouterContext";

class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location,
    };
    // 监听路径变化，执行回调，并传入最新路径
    this.unlisten = props.history.listen((location) => {
      // 一旦状态改变，会引起组件刷新
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    let value = {
      location: this.state.location,
      history: this.props.history,
      match: Router.computeRootMatch(this.state.location.pathname),
    };

    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
