import { useContext } from "react";
import matchPath from "./mathPath";
import { default as RC } from "./RouterContext";

export function useHistory() {
  const ctx = useContext(RC);
  return ctx.history;
}

export function useLocation() {
  const ctx = useContext(RC);
  return ctx.location;
}

// TODO: 这里 useParams 拿不到值???
export function useParams() {
  const ctx = useContext(RC);
  console.log(ctx);
  return ctx.match.params;
}

export function useRouteMatch(path) {
  const { location, match } = useContext(RC);
  return path ? matchPath(location.pathname, path) : match;
}
