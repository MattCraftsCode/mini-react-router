let pathToRegExp = require("path-to-regexp");
function compilePath(path, options) {
  const keys = [];
  const regexp = pathToRegExp(path, keys, options);
  return { keys, regexp };
}

function matchPath(pathname, options = {}) {
  let {
    path = "/",
    exact = false,
    strict = false,
    sensitive = false,
  } = options;

  let { keys, regexp } = compilePath(pathname);
  const match = regexp.exec(pathname);

  if (!match) {
    return null;
  }

  const { url, ...groups } = match;
  // pathname = /user/list  regexp = /\/user/ url=/user
  const isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  return {
    path,
    url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = groups[index];
    }, {}),
  };
}

export default matchPath;
