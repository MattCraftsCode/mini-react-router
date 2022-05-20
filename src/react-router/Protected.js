import { Route, Redirect } from "../react-router-dom";

function Protected(props) {
  const { path, component: RouteComponent, auth, fall } = props;
  return (
    <Route
      path={path}
      render={(routeProps) => {
        let allow = false;
        if (!auth || typeof auth !== "function") {
          allow = true;
        } else {
          allow = auth();
        }

        if (allow) {
          return <RouteComponent {...routeProps}></RouteComponent>;
        } else {
          return <Redirect to={{ pathname: fall, state: { from: path } }} />;
        }
      }}
    ></Route>
  );
}

export default Protected;
