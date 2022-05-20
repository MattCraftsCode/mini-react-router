function createHashHistory() {
  let stack = []; // 模拟一个历史条目栈，放的都是 location
  let index = -1; // 模拟一个当前索引
  let action = "POP"; // 默认动作
  let state; // 当前状态
  let listeners = []; // 监听函数的数组

  // 跳转到 n，指针移动，触发 onPopState
  // go 是在历史条目中跳转，条目数不会发生改变
  function go(n) {
    action = "POP";
    index += n;

    // 判断越界
    if (index < 0) {
      index = 0;
    } else if (index >= stack.length) {
      index = stack.length - 1;
    }

    let nextLocation = stack[index];
    state = nextLocation.state;
    // 用新的 pathname 改变当前的 hash
    window.location.hash = nextLocation.pathname;
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  const listener = () => {
    // /user/#/api  -> /api
    let pathname = window.location.hash.slice(1);
    Object.assign(history, { action, location: { pathname, state } });
    if (action === "PUSH") {
      stack[++index] = history.location;
      // stack.push(history.location);
    }
    // 更新组件
    listeners.forEach((l) => l(history.location));
  };
  window.addEventListener("hashchange", listener);

  function push(path, nextState) {
    action = "PUSH";
    state = nextState;
    // 触发 hashchange 事件
    window.location.hash = path;
  }

  function listen(listener) {
    listeners.push(listener);
    return function () {
      // 把此监听函数从数组中删除
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  const history = {
    action: "POP", // 对 history 执行的动作
    push,
    go,
    goBack,
    goForward,
    listen,
    location: {
      pathname: window.location.hash.slice(1),
      state: undefined,
    },
  };

  // 不够优雅
  // let lastHash = window.location.hash;
  // window.location.hash = "/";
  // window.location.hash = lastHash.slice(1);

  action = "PUSH";
  listener();

  return history;
}

export default createHashHistory;
