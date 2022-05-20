function createBrowserHistory(props) {
  const nativeHistory = window.history;
  let listeners = [];
  let currentMessge; // 定义当前阻止跳转的消息函数
  let userConfirm = props.getUserConfirmation
    ? props.getUserConfirmation()
    : window.confirm; // 用户自定义弹窗

  // 跳转到 n，指针移动，触发 onPopState
  function go(n) {
    nativeHistory.go(n);
  }

  function goBack() {
    nativeHistory.back();
  }

  function goForward() {
    nativeHistory.forward();
  }

  function listen(listener) {
    listeners.push(listener);
    return function () {
      // 把此监听函数从数组中删除
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function setState(newState) {
    // { action: 'PUSH', location: { state: {...}, pathname: '/bar' } }
    Object.assign(history, newState);
    history.length = nativeHistory.length; // 更新 length，当前历史的长度
    listeners.forEach((l) => l(history.location)); // Router 的 onListen, 去触发视图更新
  }

  /**
   * push 方法
   * @param {*} pathname 跳转路径
   * @param {*} state 跳转的状态
   */
  function push(to, nextState) {
    // 对标 nativeHistory.pushState 方法
    const action = "PUSH";
    let pathname;
    let state;
    // 兼容路由的 to 传递的是一个对象 {pathname, state}
    if (typeof to === "object") {
      state = to.state;
      pathname = to.pathname;
    } else {
      pathname = to;
      state = nextState;
    }

    // 是否需要阻止跳转
    if (currentMessge) {
      const message = currentMessge({ pathname });
      const allow = userConfirm(message);

      if (!allow) {
        return;
      }
    }

    nativeHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    setState({ action, location });
  }

  function block(newMessage) {
    currentMessge = newMessage;
    return () => {
      currentMessge = null;
    };
  }

  const history = {
    action: "POP", // 对 history 执行的动作, push
    push,
    go,
    goBack,
    goForward,
    listen,
    location: {
      // setState 后 update 了
      pathname: window.location.pathname,
      state: nativeHistory.state,
    },
    block,
  };

  return history;
}

export default createBrowserHistory;
