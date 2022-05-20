import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";

// 自己实现 Lazy 方法
function lazy(load) {
  return class extends React.Component {
    // 实际加载的组件，默认不存在
    state = { trueComponent: null };

    componentDidMount() {
      load().then((result) => {
        this.setState({ trueComponent: result.default || result });
      });
    }
    render() {
      const { trueComponent: LoadComponent } = this.state;
      return LoadComponent ? <LoadComponent {...this.props} /> : null;
    }
  };
}

// 使用 React 官方 lazy
if (false) {
  const LazyHome = React.lazy(() =>
    import(/* webpackChunkName: "home" */ "./components/lazy/LazyHome")
  );
  const LazyProfile = React.lazy(() =>
    import(/* webpackChunkName: "profile" */ "./components/lazy/LazyProfile")
  );
}

const LazyHome = lazy(() =>
  import(/* webpackChunkName: "home" */ "./components/lazy/LazyHome")
);
const LazyProfile = lazy(() =>
  import(/* webpackChunkName: "profile" */ "./components/lazy/LazyProfile")
);

function SuspenseHome() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <LazyHome></LazyHome>
    </React.Suspense>
  );
}

function SuspenseProfile() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <LazyProfile></LazyProfile>
    </React.Suspense>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/profile">个人</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" component={SuspenseHome} exact />
            <Route path="/profile" component={SuspenseProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
