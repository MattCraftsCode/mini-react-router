function createBrowserHistory() {
  const nativeHistory = window.history;
  const listeners = [];

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
  function push(path, state) {
    // 对标 nativeHistory.pushState 方法
    const action = "PUSH";
    nativeHistory.pushState(state, null, path);
    let location = { state, pathname: path };
    setState({ action, location });
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
  };

  return history;
}

export default createBrowserHistory;
