import LifeCycle from "./LifeCycle";
import RouterContext from "./RouterContext";
import React, { useEffect, useContext } from "react";

// 实现一: 函数组件 Prompt
function Prompt({ when, message }) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        // 如果不需要组织，则什么都不做
        if (!when) {
          return null;
        }

        // 给 history 加上一个 block 方法
        const block = value.history.block;

        return (
          <LifeCycle
            onMount={(self) => (self.release = block(message))}
            onUnMount={(self) => {
              self.release();
            }}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

// 实现二：类组件实现 Prompt
if (false) {
  class Prompt extends React.Component {
    static contextType = RouterContext;

    componentDidMount() {
      if (!this.props.when) {
        return;
      }
      this.block = this.context.history.block;
      this.release = this.block(this.props.message);
    }

    componentWillUnmount() {
      if (this.release) {
        this.release();
      }
    }

    render() {
      return null;
    }
  }
}

// 实现三: useEffect 实现 Prompt
if (false) {
  function Prompt({ when, message }) {
    const context = useContext(RouterContext);

    useEffect(() => {
      return context.history.block(message);
    });
    return null;
  }
}

export default Prompt;
